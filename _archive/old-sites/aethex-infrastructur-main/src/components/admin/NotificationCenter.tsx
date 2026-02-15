import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Bell,
  Check,
  Lightning,
  TrendUp,
  TrendDown,
  Users,
  Warning,
  Trash,
  CheckCircle
} from '@phosphor-icons/react'
import { useNotifications, Notification, NotificationType, NotificationPriority } from '@/hooks/use-notifications'
import { motion, AnimatePresence } from 'framer-motion'

export function NotificationCenter() {
  const { notifications, unreadCount, markAsRead, markAllAsRead, deleteNotification, clearAll } = useNotifications()
  const [isOpen, setIsOpen] = useState(false)
  const [filter, setFilter] = useState<'all' | 'unread'>('all')

  const filteredNotifications = filter === 'unread' 
    ? notifications.filter(n => !n.read)
    : notifications

  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case 'api_spike':
      case 'api_limit':
        return <Lightning className="w-5 h-5" weight="fill" />
      case 'upgrade':
        return <TrendUp className="w-5 h-5" weight="bold" />
      case 'downgrade':
        return <TrendDown className="w-5 h-5" weight="bold" />
      case 'new_customer':
        return <Users className="w-5 h-5" weight="bold" />
      case 'system_alert':
        return <Warning className="w-5 h-5" weight="fill" />
      case 'revenue_milestone':
      case 'usage_milestone':
        return <CheckCircle className="w-5 h-5" weight="fill" />
    }
  }

  const getPriorityColor = (priority: NotificationPriority) => {
    switch (priority) {
      case 'critical':
        return 'text-[oklch(0.62_0.24_25)] bg-[oklch(0.62_0.24_25)]/10 border-[oklch(0.62_0.24_25)]/30'
      case 'high':
        return 'text-[oklch(0.80_0.15_85)] bg-[oklch(0.80_0.15_85)]/10 border-[oklch(0.80_0.15_85)]/30'
      case 'medium':
        return 'text-accent bg-accent/10 border-accent/30'
      case 'low':
        return 'text-muted-foreground bg-muted/30 border-border'
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

  const handleNotificationClick = (notification: Notification) => {
    if (!notification.read) {
      markAsRead(notification.id)
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative hover:bg-muted/50"
        >
          <Bell className="w-5 h-5" weight={unreadCount > 0 ? "fill" : "regular"} />
          {unreadCount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 bg-[oklch(0.62_0.24_25)] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
            >
              {unreadCount > 99 ? '99+' : unreadCount}
            </motion.div>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-xl p-0">
        <SheetHeader className="p-6 pb-4 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <SheetTitle className="text-xl">Notifications</SheetTitle>
              <SheetDescription>
                Critical events and customer activity
              </SheetDescription>
            </div>
            {notifications.length > 0 && (
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                {notifications.length}
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-2 mt-4">
            <div className="flex gap-1 flex-1">
              <Button
                variant={filter === 'all' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setFilter('all')}
                className="flex-1"
              >
                All
              </Button>
              <Button
                variant={filter === 'unread' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setFilter('unread')}
                className="flex-1"
              >
                Unread ({unreadCount})
              </Button>
            </div>
            
            {unreadCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={markAllAsRead}
                className="gap-2 text-accent hover:text-accent"
              >
                <Check className="w-4 h-4" />
                Mark all read
              </Button>
            )}
          </div>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-180px)]">
          <div className="p-4 space-y-2">
            <AnimatePresence>
              {filteredNotifications.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">
                    {filter === 'unread' ? 'No unread notifications' : 'No notifications yet'}
                  </p>
                </motion.div>
              ) : (
                filteredNotifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    layout
                    onClick={() => handleNotificationClick(notification)}
                    className={`
                      group relative p-4 rounded-lg border cursor-pointer transition-all duration-200
                      ${notification.read 
                        ? 'bg-muted/20 border-border hover:bg-muted/40' 
                        : 'bg-card border-primary/30 hover:border-primary/50 shadow-sm'
                      }
                    `}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${getPriorityColor(notification.priority)}`}>
                        {getNotificationIcon(notification.type)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className={`font-semibold text-sm ${notification.read ? 'text-muted-foreground' : 'text-foreground'}`}>
                            {notification.title}
                          </h4>
                          {!notification.read && (
                            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1" />
                          )}
                        </div>
                        
                        <p className={`text-sm ${notification.read ? 'text-muted-foreground/70' : 'text-muted-foreground'}`}>
                          {notification.message}
                        </p>
                        
                        {notification.customerName && (
                          <p className="text-xs text-accent mt-1 font-medium">
                            {notification.customerName}
                          </p>
                        )}
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-muted-foreground">
                            {getTimeAgo(notification.timestamp)}
                          </span>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              deleteNotification(notification.id)
                            }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity h-6 px-2 text-muted-foreground hover:text-[oklch(0.62_0.24_25)]"
                          >
                            <Trash className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </ScrollArea>

        {notifications.length > 0 && (
          <div className="p-4 border-t border-border">
            <Button
              variant="outline"
              className="w-full gap-2 text-muted-foreground hover:text-[oklch(0.62_0.24_25)] hover:border-[oklch(0.62_0.24_25)]"
              onClick={clearAll}
            >
              <Trash className="w-4 h-4" />
              Clear all notifications
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
