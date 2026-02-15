import { Card } from '@/components/ui/card'
import { 
  Users, 
  CurrencyDollar, 
  TrendUp, 
  Lightning,
  Globe,
  CheckCircle,
  Clock
} from '@phosphor-icons/react'
import { useKV } from '@github/spark/hooks'
import { useEffect } from 'react'
import { LiveActivityFeed } from './LiveActivityFeed'

interface MetricCardProps {
  title: string
  value: string | number
  change?: string
  trend?: 'up' | 'down'
  icon: React.ReactNode
  iconColor: string
}

function MetricCard({ title, value, change, trend, icon, iconColor }: MetricCardProps) {
  return (
    <Card className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {change && (
            <div className="flex items-center gap-1">
              <TrendUp 
                className={`w-4 h-4 ${
                  trend === 'up' ? 'text-[oklch(0.65_0.20_145)]' : 'text-[oklch(0.62_0.24_25)] rotate-180'
                }`} 
              />
              <span className={`text-sm ${
                trend === 'up' ? 'text-[oklch(0.65_0.20_145)]' : 'text-[oklch(0.62_0.24_25)]'
              }`}>
                {change}
              </span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg ${iconColor}`}>
          {icon}
        </div>
      </div>
    </Card>
  )
}

interface Metrics {
  totalCustomers: number
  activeCustomers: number
  mrr: number
  apiCallsToday: number
  avgResponseTime: number
  uptime: number
}

export function DashboardOverview() {
  const [metrics, setMetrics] = useKV<Metrics>('admin-metrics', {
    totalCustomers: 0,
    activeCustomers: 0,
    mrr: 0,
    apiCallsToday: 0,
    avgResponseTime: 0,
    uptime: 99.98
  })

  useEffect(() => {
    if (metrics && metrics.totalCustomers === 0) {
      setMetrics((current) => ({
        ...current,
        totalCustomers: 247,
        activeCustomers: 189,
        mrr: 48750,
        apiCallsToday: 3847265,
        avgResponseTime: 42,
        uptime: 99.98
      }))
    }
  }, [])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          title="Total Customers"
          value={metrics?.totalCustomers || 0}
          change="+12% this month"
          trend="up"
          icon={<Users className="w-6 h-6 text-primary" weight="bold" />}
          iconColor="bg-primary/10"
        />
        
        <MetricCard
          title="Monthly Recurring Revenue"
          value={formatCurrency(metrics?.mrr || 0)}
          change="+18% this month"
          trend="up"
          icon={<CurrencyDollar className="w-6 h-6 text-[oklch(0.65_0.20_145)]" weight="bold" />}
          iconColor="bg-[oklch(0.65_0.20_145)]/10"
        />
        
        <MetricCard
          title="API Calls Today"
          value={formatNumber(metrics?.apiCallsToday || 0)}
          change="+8% vs yesterday"
          trend="up"
          icon={<Lightning className="w-6 h-6 text-accent" weight="fill" />}
          iconColor="bg-accent/10"
        />
        
        <MetricCard
          title="Active Customers"
          value={metrics?.activeCustomers || 0}
          change={`${(((metrics?.activeCustomers || 0) / (metrics?.totalCustomers || 1)) * 100).toFixed(0)}% active rate`}
          trend="up"
          icon={<CheckCircle className="w-6 h-6 text-[oklch(0.65_0.20_145)]" weight="fill" />}
          iconColor="bg-[oklch(0.65_0.20_145)]/10"
        />
        
        <MetricCard
          title="Avg Response Time"
          value={`${metrics?.avgResponseTime || 0}ms`}
          change="-5ms vs last week"
          trend="up"
          icon={<Clock className="w-6 h-6 text-primary" weight="bold" />}
          iconColor="bg-primary/10"
        />
        
        <MetricCard
          title="System Uptime"
          value={`${metrics?.uptime || 99.98}%`}
          icon={<Globe className="w-6 h-6 text-[oklch(0.65_0.20_145)]" weight="bold" />}
          iconColor="bg-[oklch(0.65_0.20_145)]/10"
        />
      </div>

      <LiveActivityFeed />
    </div>
  )
}
