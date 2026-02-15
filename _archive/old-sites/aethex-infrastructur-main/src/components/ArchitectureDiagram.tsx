import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GitBranch } from '@phosphor-icons/react'
import { ARMS } from '@/lib/constants'
import { Link, useNavigate } from 'react-router-dom'

interface ArchNodeProps {
  id: string
  name: string
  color: string
  x: number
  y: number
  description: string
  onHover: (id: string | null) => void
  isHighlighted: boolean
  onClick: () => void
}

function ArchNode({ name, color, x, y, description, onHover, isHighlighted, id, onClick }: ArchNodeProps) {
  return (
    <g
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      className="transition-transform hover:scale-110"
    >
      <motion.circle
        cx={x}
        cy={y}
        r={isHighlighted ? 65 : 60}
        fill="oklch(0.12 0.03 270)"
        stroke={color}
        strokeWidth={isHighlighted ? 4 : 2}
        animate={{
          r: isHighlighted ? 65 : 60,
          strokeWidth: isHighlighted ? 4 : 2
        }}
        transition={{ duration: 0.2 }}
      />
      
      {isHighlighted && (
        <motion.circle
          cx={x}
          cy={y}
          r={80}
          fill="none"
          stroke={color}
          strokeWidth={1}
          opacity={0.3}
          initial={{ r: 60, opacity: 0 }}
          animate={{ r: 80, opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={color}
        fontSize="14"
        fontWeight="600"
        fontFamily="Space Grotesk, sans-serif"
      >
        {name}
      </text>
      
      {isHighlighted && (
        <motion.text
          x={x}
          y={y + 100}
          textAnchor="middle"
          fill="oklch(0.65 0.02 265)"
          fontSize="12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {description}
        </motion.text>
      )}
    </g>
  )
}

export function ArchitectureDiagram() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const navigate = useNavigate()
  
  const centerX = 400
  const centerY = 300
  const radius = 200
  
  const handleNodeClick = (armId: string) => {
    // Convert arm ID to route path
    navigate(`/${armId}`)
  }
  
  const positions = ARMS.map((arm, i) => {
    const angle = (i * 2 * Math.PI) / ARMS.length - Math.PI / 2
    return {
      ...arm,
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    }
  })
  
  return (
    <section id="architecture" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <GitBranch className="text-primary" weight="fill" />
            <span className="text-sm font-medium text-primary">System Architecture</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AeThex Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A distributed architecture designed for scalability, reliability, and cross-platform synchronization
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 bg-card/50 backdrop-blur border-border overflow-hidden">
            <div className="flex flex-col items-center">
              <svg
                viewBox="0 0 800 600"
                className="w-full max-w-4xl"
                style={{ maxHeight: '600px' }}
              >
                <defs>
                  <radialGradient id="centerGlow">
                    <stop offset="0%" stopColor="oklch(0.62 0.24 286)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="oklch(0.62 0.24 286)" stopOpacity="0" />
                  </radialGradient>
                </defs>
                
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={150}
                  fill="url(#centerGlow)"
                />
                
                {positions.map((pos, i) => (
                  <motion.line
                    key={`line-${i}`}
                    x1={centerX}
                    y1={centerY}
                    x2={pos.x}
                    y2={pos.y}
                    stroke={hoveredNode === pos.id ? pos.color : 'oklch(0.20 0.04 270)'}
                    strokeWidth={hoveredNode === pos.id ? 3 : 1}
                    strokeDasharray={hoveredNode === pos.id ? '0' : '5,5'}
                    animate={{
                      stroke: hoveredNode === pos.id ? pos.color : 'oklch(0.20 0.04 270)',
                      strokeWidth: hoveredNode === pos.id ? 3 : 1
                    }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
                
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={40}
                  fill="oklch(0.12 0.03 270)"
                  stroke="oklch(0.62 0.24 286)"
                  strokeWidth={3}
                />
                
                <text
                  x={centerX}
                  y={centerY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="oklch(0.62 0.24 286)"
                  fontSize="16"
                  fontWeight="700"
                  fontFamily="Space Grotesk, sans-serif"
                >
                  Nexus
                </text>
                
                {positions.map((pos) => (
                  <ArchNode
                    key={pos.id}
                    id={pos.id}
                    name={pos.name}
                    color={pos.color}
                    x={pos.x}
                    y={pos.y}
                    description={pos.description}
                    onHover={setHoveredNode}
                    isHighlighted={hoveredNode === pos.id}
                    onClick={() => handleNodeClick(pos.id)}
                  />
                ))}
              </svg>
              
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                {ARMS.map((arm) => (
                  <Link key={arm.id} to={`/${arm.id}`}>
                    <Badge
                      variant="outline"
                      className="px-4 py-2 cursor-pointer transition-all hover-lift"
                      style={{
                        borderColor: hoveredNode === arm.id ? arm.color : 'oklch(0.20 0.04 270)',
                        backgroundColor: hoveredNode === arm.id ? `${arm.color}20` : 'transparent',
                        color: hoveredNode === arm.id ? arm.color : 'oklch(0.65 0.02 265)'
                      }}
                      onMouseEnter={() => setHoveredNode(arm.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      {arm.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
