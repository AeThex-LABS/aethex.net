import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import ThreeGlobe from 'three-globe'
import { Developer, DIVISION_COLORS } from '@/lib/types'
import { TimezoneTooltip } from '@/components/TimezoneTooltip'

interface EarthGlobeProps {
  developers: Developer[]
  selectedDeveloperId: string | null
  onDeveloperClick: (developerId: string) => void
  filteredDivisions: string[]
}

interface Annotation {
  id: string
  position: { x: number; y: number }
  label: string
  value: string
}

function createMeasurementLines(): THREE.Group {
  const group = new THREE.Group()
  const dashedMaterial = new THREE.LineDashedMaterial({
    color: 0x404040,
    dashSize: 0.05,
    gapSize: 0.03,
    linewidth: 1,
    transparent: true,
    opacity: 0.3,
  })

  const fadedMaterial = new THREE.LineDashedMaterial({
    color: 0x404040,
    dashSize: 0.08,
    gapSize: 0.05,
    linewidth: 1,
    transparent: true,
    opacity: 0.15,
  })

  const radius = 1.7

  const horizontalPoints = [
    new THREE.Vector3(-radius, 0, 0),
    new THREE.Vector3(radius, 0, 0),
  ]
  const horizontalGeometry = new THREE.BufferGeometry().setFromPoints(horizontalPoints)
  const horizontalLine = new THREE.Line(horizontalGeometry, dashedMaterial)
  horizontalLine.computeLineDistances()
  group.add(horizontalLine)

  const verticalPoints = [
    new THREE.Vector3(0, -radius, 0),
    new THREE.Vector3(0, radius, 0),
  ]
  const verticalGeometry = new THREE.BufferGeometry().setFromPoints(verticalPoints)
  const verticalLine = new THREE.Line(verticalGeometry, dashedMaterial)
  verticalLine.computeLineDistances()
  group.add(verticalLine)

  const depthPoints = [
    new THREE.Vector3(0, 0, -radius),
    new THREE.Vector3(0, 0, radius),
  ]
  const depthGeometry = new THREE.BufferGeometry().setFromPoints(depthPoints)
  const depthLine = new THREE.Line(depthGeometry, dashedMaterial)
  depthLine.computeLineDistances()
  group.add(depthLine)

  const circleRadius = 1.5
  const circleSegments = 64
  const circlePoints: THREE.Vector3[] = []
  for (let i = 0; i <= circleSegments; i++) {
    const angle = (i / circleSegments) * Math.PI * 2
    circlePoints.push(
      new THREE.Vector3(
        Math.cos(angle) * circleRadius,
        Math.sin(angle) * circleRadius,
        0
      )
    )
  }
  const circleGeometry = new THREE.BufferGeometry().setFromPoints(circlePoints)
  const circle = new THREE.Line(circleGeometry, dashedMaterial)
  circle.computeLineDistances()
  group.add(circle)

  const innerCircleRadius = 1.3
  const innerCirclePoints: THREE.Vector3[] = []
  for (let i = 0; i <= circleSegments; i++) {
    const angle = (i / circleSegments) * Math.PI * 2
    innerCirclePoints.push(
      new THREE.Vector3(
        Math.cos(angle) * innerCircleRadius,
        Math.sin(angle) * innerCircleRadius,
        0
      )
    )
  }
  const innerCircleGeometry = new THREE.BufferGeometry().setFromPoints(innerCirclePoints)
  const innerCircle = new THREE.Line(innerCircleGeometry, fadedMaterial)
  innerCircle.computeLineDistances()
  group.add(innerCircle)

  return group
}

export function EarthGlobe({ 
  developers, 
  selectedDeveloperId, 
  onDeveloperClick,
  filteredDivisions 
}: EarthGlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const globeRef = useRef<ThreeGlobe | null>(null)
  const raycasterRef = useRef<THREE.Raycaster | null>(null)
  const mouseRef = useRef<THREE.Vector2 | null>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const isDraggingRef = useRef(false)
  const previousMousePosition = useRef({ x: 0, y: 0 })
  const autoRotateRef = useRef(true)
  const idleTimerRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const [annotations, setAnnotations] = useState<Annotation[]>([])
  const measurementLinesRef = useRef<THREE.Group | null>(null)
  const [hoveredDeveloper, setHoveredDeveloper] = useState<{ dev: Developer; position: { x: number; y: number } } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    console.log('Initializing globe...', { containerSize: { width: containerRef.current.clientWidth, height: containerRef.current.clientHeight } })

    const scene = new THREE.Scene()
    sceneRef.current = scene
    
    const raycaster = new THREE.Raycaster()
    raycasterRef.current = raycaster
    
    const mouse = new THREE.Vector2()
    mouseRef.current = mouse

    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, 3)
    camera.lookAt(0, 0, 0)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    console.log('Renderer initialized:', { width: renderer.domElement.width, height: renderer.domElement.height })

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0)
    directionalLight.position.set(5, 3, 5)
    scene.add(directionalLight)

    const backLight = new THREE.DirectionalLight(0xffffff, 0.5)
    backLight.position.set(-5, -3, -5)
    scene.add(backLight)

    const globe = new ThreeGlobe({ animateIn: false })
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
      .showAtmosphere(true)
      .atmosphereColor('#4a9eff')
      .atmosphereAltitude(0.15)

    console.log('Globe created:', globe)
    globeRef.current = globe
    scene.add(globe)

    console.log('Developers data:', developers.length)

    const filteredDevs = developers.filter(dev => 
      filteredDivisions.length === 0 || filteredDivisions.includes(dev.division)
    )

    const pointsData = filteredDevs.map(dev => ({
      lat: dev.coordinates.lat,
      lng: dev.coordinates.lng,
      size: selectedDeveloperId === dev.id ? 0.6 : 0.35,
      color: DIVISION_COLORS[dev.division],
      id: dev.id,
      developer: dev
    }))

    const ringsData = pointsData.filter(() => Math.random() < 0.4).map(point => ({
      lat: point.lat,
      lng: point.lng,
      maxR: Math.random() * 2 + 1.5,
      propagationSpeed: Math.random() * 0.5 + 0.5,
      repeatPeriod: Math.random() * 1000 + 2000,
      color: point.color
    }))

    const arcsData: any[] = []
    const projectConnections = new Map<string, Developer[]>()
    
    filteredDevs.forEach(dev => {
      dev.projects.forEach(project => {
        if (!projectConnections.has(project)) {
          projectConnections.set(project, [])
        }
        projectConnections.get(project)!.push(dev)
      })
    })

    projectConnections.forEach((devs, project) => {
      if (devs.length > 1) {
        for (let i = 0; i < devs.length; i++) {
          for (let j = i + 1; j < devs.length; j++) {
            const dev1 = devs[i]
            const dev2 = devs[j]
            
            const existingArc = arcsData.find(arc => 
              (arc.startLat === dev1.coordinates.lat && arc.startLng === dev1.coordinates.lng &&
               arc.endLat === dev2.coordinates.lat && arc.endLng === dev2.coordinates.lng) ||
              (arc.startLat === dev2.coordinates.lat && arc.startLng === dev2.coordinates.lng &&
               arc.endLat === dev1.coordinates.lat && arc.endLng === dev1.coordinates.lng)
            )
            
            if (!existingArc) {
              const isSelected = selectedDeveloperId === dev1.id || selectedDeveloperId === dev2.id
              const arcColor = isSelected ? DIVISION_COLORS[dev1.division] : DIVISION_COLORS[dev1.division] + '60'
              
              arcsData.push({
                startLat: dev1.coordinates.lat,
                startLng: dev1.coordinates.lng,
                endLat: dev2.coordinates.lat,
                endLng: dev2.coordinates.lng,
                color: arcColor,
                project: project,
                devs: [dev1.name, dev2.name],
                stroke: isSelected ? 1.5 : 0.8
              })
            }
          }
        }
      }
    })

    globe
      .pointsData(pointsData)
      .pointAltitude(0.01)
      .pointRadius('size')
      .pointColor('color')
      .pointResolution(12)
      .ringsData(ringsData)
      .ringColor('color')
      .ringMaxRadius('maxR')
      .ringPropagationSpeed('propagationSpeed')
      .ringRepeatPeriod('repeatPeriod')
      .arcsData(arcsData)
      .arcColor('color')
      .arcDashLength(0.4)
      .arcDashGap(0.2)
      .arcDashAnimateTime(2000)
      .arcStroke((d: any) => d.stroke || 0.8)
      .arcAltitude(0.3)
      .arcAltitudeAutoScale(0.5)
      .arcCircularResolution(64)
      .arcsTransitionDuration(1000)

    const measurementLines = createMeasurementLines()
    scene.add(measurementLines)
    measurementLinesRef.current = measurementLines

    const handleMouseMove = (event: MouseEvent) => {
      if (!mouseRef.current || !raycasterRef.current || !globe) return
      
      const rect = renderer.domElement.getBoundingClientRect()
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      if (!isDraggingRef.current && sceneRef.current && cameraRef.current) {
        raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current)
        const globeObject = globe as unknown as THREE.Object3D
        const intersects = raycasterRef.current.intersectObjects(globeObject.children, true)

        if (intersects.length > 0) {
          const point = intersects[0].point
          const hoveredPoint = pointsData.find(p => {
            const pointPos = globe.getCoords(p.lat, p.lng, 0.01)
            const distance = point.distanceTo(new THREE.Vector3(pointPos.x, pointPos.y, pointPos.z))
            return distance < 0.05
          })

          if (hoveredPoint) {
            renderer.domElement.style.cursor = 'pointer'
            setHoveredDeveloper({
              dev: hoveredPoint.developer,
              position: { x: event.clientX, y: event.clientY }
            })
          } else {
            renderer.domElement.style.cursor = 'default'
            setHoveredDeveloper(null)
          }
        } else {
          renderer.domElement.style.cursor = 'default'
          setHoveredDeveloper(null)
        }
      }

      if (isDraggingRef.current) {
        const deltaX = event.clientX - previousMousePosition.current.x
        const deltaY = event.clientY - previousMousePosition.current.y

        if (globe) {
          const globeObject = globe as unknown as THREE.Object3D
          globeObject.rotation.y += deltaX * 0.005
          globeObject.rotation.x += deltaY * 0.005
          globeObject.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, globeObject.rotation.x))
        }

        previousMousePosition.current = { x: event.clientX, y: event.clientY }
        autoRotateRef.current = false
        
        if (idleTimerRef.current) {
          clearTimeout(idleTimerRef.current)
        }
        idleTimerRef.current = setTimeout(() => {
          autoRotateRef.current = true
        }, 3000)
      }
    }

    const handleMouseDown = (event: MouseEvent) => {
      isDraggingRef.current = true
      previousMousePosition.current = { x: event.clientX, y: event.clientY }
      setHoveredDeveloper(null)
    }

    const handleMouseUp = () => {
      isDraggingRef.current = false
    }

    const handleClick = (event: MouseEvent) => {
      if (!sceneRef.current || !cameraRef.current || !mouseRef.current || !raycasterRef.current || !globe) return

      const rect = renderer.domElement.getBoundingClientRect()
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current)
      const globeObject = globe as unknown as THREE.Object3D
      const intersects = raycasterRef.current.intersectObjects(globeObject.children, true)

      if (intersects.length > 0) {
        const point = intersects[0].point
        const clickedPoint = pointsData.find(p => {
          const pointPos = globe.getCoords(p.lat, p.lng, 0.01)
          const distance = point.distanceTo(new THREE.Vector3(pointPos.x, pointPos.y, pointPos.z))
          return distance < 0.05
        })
        
        if (clickedPoint) {
          onDeveloperClick(clickedPoint.id)
        }
      }
    }

    renderer.domElement.addEventListener('mousemove', handleMouseMove)
    renderer.domElement.addEventListener('mousedown', handleMouseDown)
    renderer.domElement.addEventListener('mouseup', handleMouseUp)
    renderer.domElement.addEventListener('click', handleClick)

    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate)

      if (globe && autoRotateRef.current) {
        const globeObject = globe as unknown as THREE.Object3D
        globeObject.rotation.y += 0.001
      }

      updateAnnotations(camera, renderer, globe)

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      renderer.domElement.removeEventListener('mousemove', handleMouseMove)
      renderer.domElement.removeEventListener('mousedown', handleMouseDown)
      renderer.domElement.removeEventListener('mouseup', handleMouseUp)
      renderer.domElement.removeEventListener('click', handleClick)
      window.removeEventListener('resize', handleResize)
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current)
      }
    }
  }, [])

  const updateAnnotations = (camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, globe: ThreeGlobe | null) => {
    if (!measurementLinesRef.current || !globe) return

    const newAnnotations: Annotation[] = []
    const globeObject = globe as unknown as THREE.Object3D
    
    const rotationDegrees = ((globeObject.rotation.y * 180) / Math.PI) % 360
    const tiltDegrees = ((globeObject.rotation.x * 180) / Math.PI)
    
    const activeNodes = developers.filter(dev => 
      filteredDivisions.length === 0 || filteredDivisions.includes(dev.division)
    ).length

    const positions = [
      { pos: new THREE.Vector3(1.8, 0, 0), label: 'RADIUS', value: '6371 KM', id: 'radius-x' },
      { pos: new THREE.Vector3(0, 1.8, 0), label: 'EQUATOR', value: '0° LAT', id: 'altitude-y' },
      { pos: new THREE.Vector3(0, -1.8, 0), label: 'S-POLE', value: '-90° LAT', id: 'meridian-y' },
      { pos: new THREE.Vector3(0, 0, 1.8), label: 'PRIME', value: `${rotationDegrees.toFixed(1)}°`, id: 'longitude-z' },
      { pos: new THREE.Vector3(-1.5, 1.5, 0), label: 'TILT', value: `${tiltDegrees.toFixed(1)}°`, id: 'tilt' },
      { pos: new THREE.Vector3(1.5, -1.5, 0), label: 'NODES', value: `${activeNodes}/${developers.length}`, id: 'nodes' },
    ]

    positions.forEach(({ pos, label, value, id }) => {
      const screenPos = pos.clone().project(camera)
      const x = (screenPos.x * 0.5 + 0.5) * renderer.domElement.clientWidth
      const y = (-(screenPos.y * 0.5) + 0.5) * renderer.domElement.clientHeight

      if (screenPos.z < 1) {
        newAnnotations.push({ id, position: { x, y }, label, value })
      }
    })

    setAnnotations(newAnnotations)
  }

  useEffect(() => {
    if (!globeRef.current) return

    const filteredDevs = developers.filter(dev => 
      filteredDivisions.length === 0 || filteredDivisions.includes(dev.division)
    )

    const pointsData = filteredDevs.map(dev => ({
      lat: dev.coordinates.lat,
      lng: dev.coordinates.lng,
      size: selectedDeveloperId === dev.id ? 0.6 : 0.35,
      color: DIVISION_COLORS[dev.division],
      id: dev.id,
      developer: dev
    }))

    const ringsData = pointsData.filter(() => Math.random() < 0.4).map(point => ({
      lat: point.lat,
      lng: point.lng,
      maxR: Math.random() * 2 + 1.5,
      propagationSpeed: Math.random() * 0.5 + 0.5,
      repeatPeriod: Math.random() * 1000 + 2000,
      color: point.color
    }))

    const arcsData: any[] = []
    const projectConnections = new Map<string, Developer[]>()
    
    filteredDevs.forEach(dev => {
      dev.projects.forEach(project => {
        if (!projectConnections.has(project)) {
          projectConnections.set(project, [])
        }
        projectConnections.get(project)!.push(dev)
      })
    })

    projectConnections.forEach((devs, project) => {
      if (devs.length > 1) {
        for (let i = 0; i < devs.length; i++) {
          for (let j = i + 1; j < devs.length; j++) {
            const dev1 = devs[i]
            const dev2 = devs[j]
            
            const existingArc = arcsData.find(arc => 
              (arc.startLat === dev1.coordinates.lat && arc.startLng === dev1.coordinates.lng &&
               arc.endLat === dev2.coordinates.lat && arc.endLng === dev2.coordinates.lng) ||
              (arc.startLat === dev2.coordinates.lat && arc.startLng === dev2.coordinates.lng &&
               arc.endLat === dev1.coordinates.lat && arc.endLng === dev1.coordinates.lng)
            )
            
            if (!existingArc) {
              const isSelected = selectedDeveloperId === dev1.id || selectedDeveloperId === dev2.id
              const arcColor = isSelected ? DIVISION_COLORS[dev1.division] : DIVISION_COLORS[dev1.division] + '60'
              
              arcsData.push({
                startLat: dev1.coordinates.lat,
                startLng: dev1.coordinates.lng,
                endLat: dev2.coordinates.lat,
                endLng: dev2.coordinates.lng,
                color: arcColor,
                project: project,
                devs: [dev1.name, dev2.name],
                stroke: isSelected ? 1.5 : 0.8
              })
            }
          }
        }
      }
    })

    globeRef.current
      .pointsData(pointsData)
      .pointAltitude(0.01)
      .pointRadius('size')
      .pointColor('color')
      .pointResolution(12)
      .ringsData(ringsData)
      .ringColor('color')
      .ringMaxRadius('maxR')
      .ringPropagationSpeed('propagationSpeed')
      .ringRepeatPeriod('repeatPeriod')
      .arcsData(arcsData)
      .arcColor('color')
      .arcDashLength(0.4)
      .arcDashGap(0.2)
      .arcDashAnimateTime(2000)
      .arcStroke((d: any) => d.stroke || 0.8)
      .arcAltitude(0.3)
      .arcAltitudeAutoScale(0.5)
      .arcCircularResolution(64)
      .arcsTransitionDuration(1000)
  }, [filteredDivisions, developers, selectedDeveloperId])

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {developers.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="bg-background/90 border-2 border-foreground p-6 backdrop-blur">
            <p className="text-sm text-muted-foreground font-mono text-center">
              Globe initializing... <br/>
              Waiting for developer data.
            </p>
          </div>
        </div>
      )}
      
      {annotations.map((annotation) => (
        <div
          key={annotation.id}
          className="absolute pointer-events-none"
          style={{
            left: `${annotation.position.x}px`,
            top: `${annotation.position.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="relative">
            <div className="absolute w-8 h-8 -left-4 -top-4 border border-foreground opacity-30">
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t-2 border-l-2 border-foreground" />
              <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t-2 border-r-2 border-foreground" />
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b-2 border-l-2 border-foreground" />
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-2 border-r-2 border-foreground" />
            </div>
            
            <div className="absolute left-4 top-1/2 w-6 h-px bg-foreground opacity-40" 
                 style={{ transform: 'translateY(-50%)' }} />
            
            <div className="absolute left-10 top-1/2 -translate-y-1/2 bg-background border-2 border-foreground px-2.5 py-1.5 shadow-lg">
              <div className="text-[9px] text-muted-foreground uppercase tracking-[0.15em] font-mono font-semibold leading-tight">
                {annotation.label}
              </div>
              <div className="text-xs font-bold text-foreground font-mono leading-tight mt-0.5">
                {annotation.value}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {hoveredDeveloper && (
        <TimezoneTooltip
          developer={hoveredDeveloper.dev}
          position={hoveredDeveloper.position}
        />
      )}
    </div>
  )
}
