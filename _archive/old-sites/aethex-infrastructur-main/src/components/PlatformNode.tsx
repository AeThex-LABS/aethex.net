import { motion } from 'framer-motion'
import { DeviceMobile, Desktop, GameController, Globe } from '@phosphor-icons/react'
import type { Platform } from '@/lib/types'

interface PlatformNodeProps {
  platform: Platform
  isActive: boolean
  isSyncing: boolean
  containerSize: { width: number; height: number }
  onClick: () => void
}

const PLATFORM_ICONS = {
  web: Globe,
  mobile: DeviceMobile,
  console: GameController,
  pc: Desktop
}

export function PlatformNode({ platform, isActive, isSyncing, containerSize, onClick }: PlatformNodeProps) {
  const Icon = PLATFORM_ICONS[platform.type]
  
  const x = platform.position.x * containerSize.width
  const y = platform.position.y * containerSize.height
  
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)'
      }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <motion.div
        animate={{
          scale: isSyncing ? [1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }}
        className="relative"
      >
        <motion.div
          animate={{
            boxShadow: isActive
              ? [
                  `0 0 20px ${platform.color}80, 0 0 40px ${platform.color}40`,
                  `0 0 30px ${platform.color}90, 0 0 60px ${platform.color}50`,
                  `0 0 20px ${platform.color}80, 0 0 40px ${platform.color}40`
                ]
              : `0 0 10px ${platform.color}40, 0 0 20px ${platform.color}20`
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="w-20 h-20 rounded-2xl bg-card border-2 flex items-center justify-center"
          style={{
            borderColor: isActive ? platform.color : 'oklch(0.20 0.04 270)',
            backgroundColor: isActive ? `${platform.color}20` : 'oklch(0.12 0.03 270)'
          }}
        >
          <Icon
            size={32}
            weight="fill"
            style={{ color: isActive ? platform.color : 'oklch(0.65 0.02 265)' }}
          />
        </motion.div>
        
        <motion.div
          animate={{
            opacity: isSyncing ? [0.3, 0.8, 0.3] : 0
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(circle, ${platform.color}40 0%, transparent 70%)`
          }}
        />
      </motion.div>
      
      <div className="text-center mt-3">
        <p
          className="text-sm font-semibold"
          style={{ color: isActive ? platform.color : 'oklch(0.65 0.02 265)' }}
        >
          {platform.name}
        </p>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block mt-1"
          >
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: `${platform.color}30`,
                color: platform.color
              }}
            >
              Active
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
