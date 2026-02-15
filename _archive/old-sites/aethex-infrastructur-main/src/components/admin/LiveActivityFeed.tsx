import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useNotifications } from '@/hooks/use-notifications'
import { 
  Lightning, 
  TrendUp, 
  TrendDown, 
  Users, 
  Warning,
  CheckCircle,
  Bell
} from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

export function LiveActivityFeed() {
  const { notifications } = useNotifications()
  
  const recentNotifications = notifications.slice(0, 10)

  const getIcon = (type: string) => {
    switch (type) {
      case 'api_spike':
      case 'api_limit':
        return <Lightning className="w-4 h-4" weight="fill" />
      case 'upgrade':
        return <TrendUp className="w-4 h-4" weight="bold" />
      case 'downgrade':
        return <TrendDown className="w-4 h-4" weight="bold" />
      case 'new_customer':
        return <Users className="w-4 h-4" weight="bold" />
      case 'system_alert':
        return <Warning className="w-4 h-4" weight="fill" />
      case 'revenue_milestone':
      case 'usage_milestone':
        return <CheckCircle className="w-4 h-4" weight="fill" />
      default:
        return <Bell className="w-4 h-4" />
    }
  }

  const getColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'text-[oklch(0.62_0.24_25)] bg-[oklch(0.62_0.24_25)]/10'
      case 'high':
        return 'text-[oklch(0.80_0.15_85)] bg-[oklch(0.80_0.15_85)]/10'
      case 'medium':
        return 'text-accent bg-accent/10'
      case 'low':
        return 'text-muted-foreground bg-muted/30'
      default:
        return 'text-muted-foreground bg-muted/30'
    }
  }

  const getTimeAgo = (date: Date) => {
    const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000)
    if (seconds < 60) return `${seconds}s ago`
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours}h ago`
    const days = Math.floor(hours / 24)
    return `${days}d ago`
  }

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">Live Activity Feed</h2>
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 gap-1">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Live
        </Badge>
      </div>

      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-3">
          <AnimatePresence>
            {recentNotifications.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">No recent activity</p>
              </motion.div>
            ) : (
              recentNotifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  layout
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors border border-transparent hover:border-border"
                >
                  <div className={`p-2 rounded-lg ${getColor(notification.priority)} flex-shrink-0`}>
                    {getIcon(notification.type)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {notification.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {notification.message}
                        </p>
                        {notification.customerName && (
                          <p className="text-xs text-accent mt-1 font-medium">
                            {notification.customerName}
                          </p>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {getTimeAgo(notification.timestamp)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </ScrollArea>
    </Card>
  )
}
