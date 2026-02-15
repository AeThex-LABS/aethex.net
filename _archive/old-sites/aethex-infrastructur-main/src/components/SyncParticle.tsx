import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { SyncPacket, Platform } from '@/lib/types'

interface SyncParticleProps {
  packet: SyncPacket
  platforms: Platform[]
  containerSize: { width: number; height: number }
  onComplete: (id: string) => void
}

export function SyncParticle({ packet, platforms, containerSize, onComplete }: SyncParticleProps) {
  const [path, setPath] = useState({ from: { x: 0, y: 0 }, to: { x: 0, y: 0 } })
  
  useEffect(() => {
    const fromPlatform = platforms.find(p => p.id === packet.from)
    const toPlatform = platforms.find(p => p.id === packet.to)
    
    if (fromPlatform && toPlatform) {
      setPath({
        from: {
          x: fromPlatform.position.x * containerSize.width,
          y: fromPlatform.position.y * containerSize.height
        },
        to: {
          x: toPlatform.position.x * containerSize.width,
          y: toPlatform.position.y * containerSize.height
        }
      })
    }
  }, [packet, platforms, containerSize])
  
  const midX = (path.from.x + path.to.x) / 2
  const midY = (path.from.y + path.to.y) / 2 - 50
  
  return (
    <>
      <svg
        className="absolute inset-0 pointer-events-none"
        style={{ width: containerSize.width, height: containerSize.height }}
      >
        <motion.path
          d={`M ${path.from.x} ${path.from.y} Q ${midX} ${midY} ${path.to.x} ${path.to.y}`}
          stroke="oklch(0.71 0.14 210)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      </svg>
      
      <motion.div
        initial={{
          x: path.from.x,
          y: path.from.y,
          scale: 0,
          opacity: 0
        }}
        animate={{
          x: path.to.x,
          y: path.to.y,
          scale: [0, 1, 1, 0],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 0.8,
          ease: 'easeInOut',
          times: [0, 0.1, 0.9, 1]
        }}
        onAnimationComplete={() => onComplete(packet.id)}
        className="absolute w-3 h-3 rounded-full glow-accent pointer-events-none"
        style={{
          backgroundColor: 'oklch(0.71 0.14 210)',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  )
}
