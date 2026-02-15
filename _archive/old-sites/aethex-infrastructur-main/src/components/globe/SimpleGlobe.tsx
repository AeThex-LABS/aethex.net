import { useRef, useMemo, useState, memo } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import * as THREE from 'three'
import { Developer, DIVISION_COLORS } from '@/lib/types'

interface GlobeProps {
  developers: Developer[]
  onDeveloperClick: (id: string) => void
}

// Convert lat/lng to 3D coordinates
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const y = radius * Math.cos(phi)
  const z = radius * Math.sin(phi) * Math.sin(theta)
  return new THREE.Vector3(x, y, z)
}

// Connection line between two nodes
const ConnectionLine = memo(({ start, end, color, opacity }: {
  start: THREE.Vector3
  end: THREE.Vector3
  color: string
  opacity: number
}) => {
  const ref = useRef<THREE.Line>(null)
  
  const points = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      start,
      new THREE.Vector3().lerpVectors(start, end, 0.5).multiplyScalar(1.15),
      end
    )
    return curve.getPoints(50)
  }, [start, end])

  const geometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [points])

  useFrame((state) => {
    if (ref.current) {
      const material = ref.current.material as THREE.LineBasicMaterial
      material.opacity = opacity * (0.2 + Math.sin(state.clock.elapsedTime * 2) * 0.15)
    }
  })

  return (
    <line ref={ref} geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={opacity} />
    </line>
  )
})

ConnectionLine.displayName = 'ConnectionLine'

// Data packet traveling along connection
const DataPacket = memo(({ start, end, color, speed }: {
  start: THREE.Vector3
  end: THREE.Vector3
  color: string
  speed: number
}) => {
  const ref = useRef<THREE.Mesh>(null)
  
  const curve = useMemo(() => {
    return new THREE.QuadraticBezierCurve3(
      start,
      new THREE.Vector3().lerpVectors(start, end, 0.5).multiplyScalar(1.15),
      end
    )
  }, [start, end])

  useFrame((state) => {
    if (ref.current) {
      const t = (state.clock.elapsedTime * speed) % 1
      const position = curve.getPoint(t)
      ref.current.position.copy(position)
      ref.current.scale.setScalar(0.015 + Math.sin(t * Math.PI) * 0.01)
    }
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.01, 8, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
})

DataPacket.displayName = 'DataPacket'

DataPacket.displayName = 'DataPacket'

// Enhanced node with professional effects
const DeveloperNode = memo(({ dev, onClick }: { dev: Developer; onClick: () => void }) => {
  const groupRef = useRef<THREE.Group>(null)
  const hexRingRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  
  const position = useMemo(() => {
    return latLngToVector3(dev.coordinates.lat, dev.coordinates.lng, 2.1)
  }, [dev.coordinates])

  const color = DIVISION_COLORS[dev.division as keyof typeof DIVISION_COLORS]

  useFrame((state) => {
    if (groupRef.current) {
      const targetScale = hovered ? 1.6 : 1.0
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15)
      
      if (!hovered) {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.08
        groupRef.current.scale.multiplyScalar(pulse)
      }
    }
    
    if (hexRingRef.current) {
      hexRingRef.current.rotation.z += 0.01
    }
  })

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Core node */}
      <mesh>
        <sphereGeometry args={[0.025, 20, 20]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 2.0 : 1.2}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.5 : 0.25}
        />
      </mesh>

      {/* Outer glow ring */}
      <mesh>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.25 : 0.12}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Hexagonal ring */}
      <mesh ref={hexRingRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.04, 0.055, 6]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.7 : 0.4}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Info card on hover */}
      {hovered && (
        <Html distanceFactor={10}>
          <div className="pointer-events-none whitespace-nowrap bg-slate-900/95 backdrop-blur-md px-3 py-2 rounded-lg border border-cyan-500/30 shadow-xl shadow-cyan-500/20">
            <div className="text-xs font-bold text-white">{dev.name}</div>
            <div className="text-[10px] text-slate-300">{dev.role}</div>
            <div className="text-[10px] text-slate-400">{dev.location}</div>
            <div className="text-[10px] text-cyan-400 uppercase tracking-wider mt-1">
              {dev.division}
            </div>
          </div>
        </Html>
      )}
    </group>
  )
})

DeveloperNode.displayName = 'DeveloperNode'

// Main Earth globe
const Earth = memo(() => {
  const meshRef = useRef<THREE.Mesh>(null)
  const cloudsRef = useRef<THREE.Mesh>(null)
  
  let textures: THREE.Texture[] = []
  let hasTextures = false
  
  try {
    textures = useLoader(
      THREE.TextureLoader,
      [
        'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
        'https://unpkg.com/three-globe/example/img/earth-topology.png'
      ]
    )
    hasTextures = textures.length === 2
  } catch (error) {
    console.warn('Texture loading failed, using fallback color')
    hasTextures = false
  }

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0005
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.0007
    }
  })

  const [colorMap, bumpMap] = hasTextures ? textures : [null, null]

  return (
    <>
      {/* Main Earth */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        {hasTextures && colorMap && bumpMap ? (
          <meshStandardMaterial
            map={colorMap}
            bumpMap={bumpMap}
            bumpScale={0.05}
            metalness={0.1}
            roughness={0.9}
            emissive="#000a1a"
            emissiveIntensity={0.15}
          />
        ) : (
          <meshStandardMaterial
            color="#1a5d8a"
            emissive="#0a2a4e"
            emissiveIntensity={0.2}
            metalness={0.2}
            roughness={0.8}
          />
        )}
      </mesh>

      {/* Clouds layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.01, 64, 64]} />
        <meshStandardMaterial
          transparent
          opacity={0.12}
          depthWrite={false}
          color="#ffffff"
        />
      </mesh>

      {/* Atmosphere layers */}
      <mesh>
        <sphereGeometry args={[2.15, 64, 64]} />
        <meshBasicMaterial
          color="#00d9ff"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[2.25, 64, 64]} />
        <meshBasicMaterial
          color="#0066ff"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  )
})

Earth.displayName = 'Earth'
  const linesRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (linesRef.current) {
      linesRef.current.rotation.y += 0.0002
    }
  })

  const lines = useMemo(() => {
    const group = new THREE.Group()
    
    // Latitude lines
    for (let lat = -80; lat <= 80; lat += 20) {
      const phi = (90 - lat) * (Math.PI / 180)
      const radius = 2.01 * Math.sin(phi)
      const y = 2.01 * Math.cos(phi)
      
      const points: THREE.Vector3[] = []
      for (let lng = 0; lng <= 360; lng += 5) {
        const theta = lng * (Math.PI / 180)
        points.push(
          new THREE.Vector3(
            radius * Math.cos(theta),
            y,
            radius * Math.sin(theta)
          )
        )
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({ 
        color: 0x00d9ff, 
        transparent: true, 
        opacity: 0.25,
        linewidth: 2
      })
      const line = new THREE.Line(geometry, material)
      group.add(line)
    }
    
    // Longitude lines
    for (let lng = 0; lng < 360; lng += 20) {
      const points: THREE.Vector3[] = []
      for (let lat = -90; lat <= 90; lat += 5) {
        const phi = (90 - lat) * (Math.PI / 180)
        const theta = lng * (Math.PI / 180)
        const radius = 2.01
        
        points.push(
          new THREE.Vector3(
            -radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.cos(phi),
            radius * Math.sin(phi) * Math.sin(theta)
          )
        )
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({ 
        color: 0x00d9ff, 
        transparent: true, 
        opacity: 0.25,
        linewidth: 2
      })
      const line = new THREE.Line(geometry, material)
      group.add(line)
    }
    
    return group
  }, [])

  return <primitive ref={linesRef} object={lines} />
})

GridLines.displayName = 'GridLines'

const Earth = memo(({ developers, onDeveloperClick }: GlobeProps) => {
  const earthRef = useRef<THREE.Mesh>(null)
  
  // Load NASA textures - wrapped in Suspense at parent level
  let textures: THREE.Texture[] = []
  let hasTextures = false
  
  try {
    textures = useLoader(
      THREE.TextureLoader,
      [
        'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
        'https://unpkg.com/three-globe/example/img/earth-topology.png'
      ]
    )
    hasTextures = textures.length === 2
  } catch (error) {
    console.warn('Texture loading failed, using fallback color')
    hasTextures = false
  }

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0005
    }
  })

  const [colorMap, bumpMap] = hasTextures ? textures : [null, null]

  return (
    <group>
      {/* Earth Sphere with NASA texture or fallback */}
      <Sphere ref={earthRef} args={[2, 128, 128]}>
        {hasTextures && colorMap && bumpMap ? (
          <meshStandardMaterial 
            map={colorMap}
            bumpMap={bumpMap}
            bumpScale={0.08}
            metalness={0.3}
            roughness={0.7}
            emissive={new THREE.Color(0x001122)}
            emissiveIntensity={0.2}
          />
        ) : (
          <meshStandardMaterial 
            color="#1a5d8a"
            emissive="#0a2a4e"
            emissiveIntensity={0.3}
            metalness={0.4}
            roughness={0.6}
          />
        )}
      </Sphere>
      
      {/* Atmosphere glow - inner */}
      <Sphere args={[2.1, 64, 64]}>
        <meshBasicMaterial 
          color="#00d9ff"
          transparent
          opacity={0.15}
          side={THREE.FrontSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Atmosphere glow - mid */}
      <Sphere args={[2.18, 64, 64]}>
        <meshBasicMaterial 
          color="#4a9eff"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Atmosphere glow - outer */}
      <Sphere args={[2.3, 64, 64]}>
        <meshBasicMaterial 
          color="#0066ff"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Grid lines */}
      <GridLines />

      {/* Stars in background - distant */}
      <Sparkles 
        count={800} 
        scale={20} 
        size={1.5} 
        speed={0.1}
        opacity={0.4}
        color="#ffffff"
      />
      
      {/* Stars - closer with color */}
      <Sparkles 
        count={300} 
        scale={12} 
        size={2.5} 
        speed={0.2}
        opacity={0.7}
        color="#00d9ff"
      />

      {/* Developer Markers */}
      {developers.map((dev) => (
        <DeveloperMarker 
          key={dev.id} 
          dev={dev} 
          onClick={() => onDeveloperClick(dev.id)}
        />
      ))}
    </group>
  )
})

Earth.displayName = 'Earth'

export function SimpleGlobe({ developers, onDeveloperClick }: GlobeProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: '#000000' }}
        gl={{ 
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance'
        }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, -3, -5]} intensity={0.6} color="#00d9ff" />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4a9eff" />
        <hemisphereLight intensity={0.5} groundColor="#000033" />
        
        <Earth developers={developers} onDeveloperClick={onDeveloperClick} />
        
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          minDistance={3}
          maxDistance={10}
          autoRotate={true}
          autoRotateSpeed={0.5}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
