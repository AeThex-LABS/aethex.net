import { useEffect } from 'react'
import { useKV } from '@github/spark/hooks'
import { toast } from 'sonner'

export type NotificationType = 
  | 'api_spike' 
  | 'api_limit' 
  | 'upgrade' 
  | 'downgrade' 
  | 'new_customer'
  | 'system_alert'
  | 'revenue_milestone'
  | 'usage_milestone'

export type NotificationPriority = 'low' | 'medium' | 'high' | 'critical'

export interface Notification {
  id: string
  type: NotificationType
  priority: NotificationPriority
  title: string
  message: string
  timestamp: Date
  read: boolean
  customerId?: string
  customerName?: string
  metadata?: Record<string, any>
}

export function useNotifications() {
  const [notifications, setNotifications, deleteNotifications] = useKV<Notification[]>('admin-notifications', [])
  const [unreadCount, setUnreadCount] = useKV<number>('admin-notifications-unread', 0)

  useEffect(() => {
    const interval = setInterval(() => {
      simulateNotification()
    }, 45000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const count = (notifications || []).filter(n => !n.read).length
    setUnreadCount(count)
  }, [notifications])

  const simulateNotification = () => {
    const rand = Math.random()
    
    if (rand < 0.3) {
      addNotification({
        type: 'api_spike',
        priority: 'high',
        title: 'High API Usage Detected',
        message: `${getRandomCompany()} exceeded 80% of their monthly quota`,
        customerName: getRandomCompany(),
        metadata: {
          usage: Math.floor(Math.random() * 20 + 80),
          plan: Math.random() > 0.5 ? 'Pro' : 'Enterprise'
        }
      })
    } else if (rand < 0.5) {
      addNotification({
        type: 'upgrade',
        priority: 'medium',
        title: 'Customer Upgraded',
        message: `${getRandomCompany()} upgraded to Enterprise plan`,
        customerName: getRandomCompany(),
        metadata: {
          fromPlan: Math.random() > 0.5 ? 'Free' : 'Pro',
          toPlan: 'Enterprise',
          mrr: 2499
        }
      })
    } else if (rand < 0.65) {
      addNotification({
        type: 'new_customer',
        priority: 'low',
        title: 'New Customer Signup',
        message: `${getRandomCompany()} signed up for Pro plan`,
        customerName: getRandomCompany(),
        metadata: {
          plan: 'Pro',
          mrr: 299
        }
      })
    } else if (rand < 0.75) {
      addNotification({
        type: 'api_limit',
        priority: 'critical',
        title: 'API Limit Reached',
        message: `${getRandomCompany()} hit their API rate limit`,
        customerName: getRandomCompany(),
        metadata: {
          limit: 10000,
          plan: 'Pro'
        }
      })
    } else if (rand < 0.85) {
      addNotification({
        type: 'revenue_milestone',
        priority: 'medium',
        title: 'Revenue Milestone',
        message: 'Monthly recurring revenue reached $50,000',
        metadata: {
          milestone: 50000,
          growth: '+18%'
        }
      })
    } else {
      addNotification({
        type: 'usage_milestone',
        priority: 'low',
        title: 'Usage Milestone',
        message: `${getRandomCompany()} reached 1M API calls`,
        customerName: getRandomCompany(),
        metadata: {
          calls: 1000000
        }
      })
    }
  }

  const addNotification = (data: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
    const notification: Notification = {
      ...data,
      id: `notif-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
      read: false
    }

    setNotifications((current) => [notification, ...(current || [])])

    if (data.priority === 'critical' || data.priority === 'high') {
      const priorityEmoji = data.priority === 'critical' ? '🚨' : '⚠️'
      toast.error(`${priorityEmoji} ${data.title}`, {
        description: data.message,
        duration: 5000
      })
    } else if (data.priority === 'medium') {
      toast.info(data.title, {
        description: data.message,
        duration: 4000
      })
    }
  }

  const markAsRead = (id: string) => {
    setNotifications((current) =>
      (current || []).map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications((current) =>
      (current || []).map((n) => ({ ...n, read: true }))
    )
  }

  const deleteNotification = (id: string) => {
    setNotifications((current) =>
      (current || []).filter((n) => n.id !== id)
    )
  }

  const clearAll = () => {
    setNotifications([])
  }

  return {
    notifications: notifications || [],
    unreadCount: unreadCount || 0,
    addNotification,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    clearAll
  }
}

const companies = [
  'Nexus Gaming',
  'Pixel Forge Studios',
  'Quantum Games',
  'Epic Ventures',
  'Stealth Studios',
  'Casual Games Inc',
  'Mobile First Gaming',
  'Indie Dev Collective',
  'Alpha Beta Games',
  'Digital Dreams',
  'GameCraft Studios',
  'Neon Arcade',
  'Virtual Legends',
  'Skyline Gaming',
  'Phoenix Interactive'
]

function getRandomCompany() {
  return companies[Math.floor(Math.random() * companies.length)]
}
