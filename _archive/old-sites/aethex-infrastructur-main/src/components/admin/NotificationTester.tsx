import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Lightning, 
  TrendUp, 
  Users, 
  Warning,
  CheckCircle,
  Bell,
  SparkleIcon
} from '@phosphor-icons/react'
import { useNotifications } from '@/hooks/use-notifications'

export function NotificationTester() {
  const { addNotification } = useNotifications()

  const testNotifications = [
    {
      type: 'api_spike' as const,
      priority: 'high' as const,
      title: 'High API Usage Alert',
      message: 'Quantum Games reached 85% of monthly API quota',
      customerName: 'Quantum Games',
      metadata: { usage: 85, plan: 'Enterprise' }
    },
    {
      type: 'upgrade' as const,
      priority: 'medium' as const,
      title: 'Customer Upgraded',
      message: 'Pixel Forge upgraded from Pro to Enterprise',
      customerName: 'Pixel Forge Studios',
      metadata: { fromPlan: 'Pro', toPlan: 'Enterprise', mrr: 2499 }
    },
    {
      type: 'api_limit' as const,
      priority: 'critical' as const,
      title: 'API Rate Limit Hit',
      message: 'Mobile First Gaming exceeded rate limit',
      customerName: 'Mobile First Gaming',
      metadata: { limit: 10000, plan: 'Pro' }
    },
    {
      type: 'new_customer' as const,
      priority: 'low' as const,
      title: 'New Customer Signup',
      message: 'Alpha Beta Games signed up for Pro plan',
      customerName: 'Alpha Beta Games',
      metadata: { plan: 'Pro', mrr: 299 }
    },
    {
      type: 'revenue_milestone' as const,
      priority: 'medium' as const,
      title: 'Revenue Milestone',
      message: 'Monthly recurring revenue reached $50,000',
      metadata: { milestone: 50000, growth: '+18%' }
    },
    {
      type: 'system_alert' as const,
      priority: 'high' as const,
      title: 'System Performance Warning',
      message: 'API response time increased by 35ms',
      metadata: { avgLatency: 77 }
    }
  ]

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-start gap-3 mb-6">
        <div className="p-2 rounded-lg bg-accent/10">
          <Bell className="w-5 h-5 text-accent" weight="fill" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">Test Notifications</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Trigger sample notifications to test the notification system
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {testNotifications.map((notif, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-auto flex-col items-start gap-2 p-4 hover:border-primary/50"
            onClick={() => addNotification(notif)}
          >
            <div className="flex items-center gap-2 w-full">
              {notif.type === 'api_spike' || notif.type === 'api_limit' ? (
                <Lightning className="w-4 h-4 text-[oklch(0.80_0.15_85)]" weight="fill" />
              ) : notif.type === 'upgrade' ? (
                <TrendUp className="w-4 h-4 text-[oklch(0.65_0.20_145)]" weight="bold" />
              ) : notif.type === 'new_customer' ? (
                <Users className="w-4 h-4 text-primary" weight="bold" />
              ) : notif.type === 'system_alert' ? (
                <Warning className="w-4 h-4 text-[oklch(0.62_0.24_25)]" weight="fill" />
              ) : (
                <CheckCircle className="w-4 h-4 text-accent" weight="fill" />
              )}
              <Badge 
                variant="outline" 
                className={`text-xs ${
                  notif.priority === 'critical' 
                    ? 'bg-[oklch(0.62_0.24_25)]/10 text-[oklch(0.62_0.24_25)] border-[oklch(0.62_0.24_25)]/30'
                    : notif.priority === 'high'
                    ? 'bg-[oklch(0.80_0.15_85)]/10 text-[oklch(0.80_0.15_85)] border-[oklch(0.80_0.15_85)]/30'
                    : notif.priority === 'medium'
                    ? 'bg-accent/10 text-accent border-accent/30'
                    : 'bg-muted text-muted-foreground border-border'
                }`}
              >
                {notif.priority}
              </Badge>
            </div>
            <span className="text-sm font-medium text-left">{notif.title}</span>
            <span className="text-xs text-muted-foreground text-left">{notif.message}</span>
          </Button>
        ))}
      </div>
    </Card>
  )
}
