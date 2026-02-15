import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Lightning, TrendUp, Code, Globe } from '@phosphor-icons/react'
import { useKV } from '@github/spark/hooks'

interface EndpointUsage {
  endpoint: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  calls: number
  avgLatency: number
  errorRate: number
  trend: number
}

interface UsageByTier {
  tier: 'Free' | 'Pro' | 'Enterprise'
  calls: number
  customers: number
  percentage: number
}

export function UsageAnalytics() {
  const [timeRange, setTimeRange] = useState('7d')
  const [endpointUsage, setEndpointUsage] = useKV<EndpointUsage[]>('admin-endpoint-usage', [])
  const [usageByTier, setUsageByTier] = useKV<UsageByTier[]>('admin-usage-by-tier', [])
  const [totalCalls, setTotalCalls] = useKV<number>('admin-total-calls', 0)

  useEffect(() => {
    if (!endpointUsage || endpointUsage.length === 0) {
      setEndpointUsage([
        {
          endpoint: '/api/v1/state/sync',
          method: 'POST',
          calls: 1847293,
          avgLatency: 42,
          errorRate: 0.12,
          trend: 8.3
        },
        {
          endpoint: '/api/v1/auth/token',
          method: 'POST',
          calls: 984726,
          avgLatency: 28,
          errorRate: 0.05,
          trend: 12.5
        },
        {
          endpoint: '/api/v1/players/profile',
          method: 'GET',
          calls: 742891,
          avgLatency: 35,
          errorRate: 0.08,
          trend: -2.1
        },
        {
          endpoint: '/api/v1/state/retrieve',
          method: 'GET',
          calls: 654782,
          avgLatency: 38,
          errorRate: 0.15,
          trend: 5.7
        },
        {
          endpoint: '/api/v1/inventory/items',
          method: 'GET',
          calls: 428937,
          avgLatency: 45,
          errorRate: 0.21,
          trend: 15.2
        },
        {
          endpoint: '/api/v1/leaderboard/scores',
          method: 'GET',
          calls: 384726,
          avgLatency: 52,
          errorRate: 0.18,
          trend: -8.4
        },
        {
          endpoint: '/api/v1/matchmaking/find',
          method: 'POST',
          calls: 298473,
          avgLatency: 68,
          errorRate: 0.34,
          trend: 22.1
        },
        {
          endpoint: '/api/v1/players/achievements',
          method: 'GET',
          calls: 187364,
          avgLatency: 41,
          errorRate: 0.09,
          trend: 4.2
        }
      ])
    }

    if (!usageByTier || usageByTier.length === 0) {
      setUsageByTier([
        {
          tier: 'Enterprise',
          calls: 12847629,
          customers: 42,
          percentage: 68.5
        },
        {
          tier: 'Pro',
          calls: 4847293,
          customers: 78,
          percentage: 25.8
        },
        {
          tier: 'Free',
          calls: 1068542,
          customers: 127,
          percentage: 5.7
        }
      ])
    }

    if (!totalCalls || totalCalls === 0) {
      setTotalCalls(18763464)
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

  const getMethodBadgeColor = (method: EndpointUsage['method']) => {
    switch (method) {
      case 'GET':
        return 'bg-[oklch(0.73_0.14_240)]/20 text-[oklch(0.73_0.14_240)] border-[oklch(0.73_0.14_240)]/30'
      case 'POST':
        return 'bg-[oklch(0.65_0.20_145)]/20 text-[oklch(0.65_0.20_145)] border-[oklch(0.65_0.20_145)]/30'
      case 'PUT':
        return 'bg-[oklch(0.80_0.15_85)]/20 text-[oklch(0.80_0.15_85)] border-[oklch(0.80_0.15_85)]/30'
      case 'DELETE':
        return 'bg-[oklch(0.62_0.24_25)]/20 text-[oklch(0.62_0.24_25)] border-[oklch(0.62_0.24_25)]/30'
    }
  }

  const getTierColor = (tier: UsageByTier['tier']) => {
    switch (tier) {
      case 'Enterprise':
        return 'bg-primary'
      case 'Pro':
        return 'bg-accent'
      case 'Free':
        return 'bg-muted-foreground'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Usage Analytics</h2>
          <p className="text-muted-foreground">API consumption and performance metrics</p>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24h">Last 24 Hours</SelectItem>
            <SelectItem value="7d">Last 7 Days</SelectItem>
            <SelectItem value="30d">Last 30 Days</SelectItem>
            <SelectItem value="90d">Last 90 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Lightning className="w-5 h-5 text-primary" weight="fill" />
            </div>
            <p className="text-sm text-muted-foreground">Total API Calls</p>
          </div>
          <p className="text-3xl font-bold text-foreground">{formatNumber(totalCalls || 0)}</p>
          <div className="flex items-center gap-1 mt-2">
            <TrendUp className="w-4 h-4 text-[oklch(0.65_0.20_145)]" />
            <span className="text-sm text-[oklch(0.65_0.20_145)]">+12.5% vs last period</span>
          </div>
        </Card>

        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <Code className="w-5 h-5 text-accent" weight="bold" />
            </div>
            <p className="text-sm text-muted-foreground">Active Endpoints</p>
          </div>
          <p className="text-3xl font-bold text-foreground">{endpointUsage?.length || 0}</p>
          <p className="text-sm text-muted-foreground mt-2">Across all services</p>
        </Card>

        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-[oklch(0.65_0.20_145)]/10">
              <Globe className="w-5 h-5 text-[oklch(0.65_0.20_145)]" weight="bold" />
            </div>
            <p className="text-sm text-muted-foreground">Avg Response Time</p>
          </div>
          <p className="text-3xl font-bold text-foreground">42ms</p>
          <div className="flex items-center gap-1 mt-2">
            <TrendUp className="w-4 h-4 text-[oklch(0.65_0.20_145)]" />
            <span className="text-sm text-[oklch(0.65_0.20_145)]">-5ms improvement</span>
          </div>
        </Card>

        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-[oklch(0.62_0.24_25)]/10">
              <Lightning className="w-5 h-5 text-[oklch(0.62_0.24_25)]" weight="fill" />
            </div>
            <p className="text-sm text-muted-foreground">Error Rate</p>
          </div>
          <p className="text-3xl font-bold text-foreground">0.14%</p>
          <p className="text-sm text-muted-foreground mt-2">Within acceptable range</p>
        </Card>
      </div>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">Usage by Tier</h3>
        <div className="space-y-6">
          {(usageByTier || []).map((tier) => (
            <div key={tier.tier} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-foreground">{tier.tier}</span>
                  <span className="text-sm text-muted-foreground">
                    {tier.customers} customers
                  </span>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm font-medium">{formatNumber(tier.calls)} calls</p>
                  <p className="text-xs text-muted-foreground">{tier.percentage}% of total</p>
                </div>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${getTierColor(tier.tier)} transition-all duration-500`}
                  style={{ width: `${tier.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">Top Endpoints</h3>
        <div className="space-y-3">
          {(endpointUsage || []).map((endpoint, index) => (
            <div
              key={endpoint.endpoint}
              className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span className="text-lg font-bold text-muted-foreground w-6">
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className={getMethodBadgeColor(endpoint.method)}>
                      {endpoint.method}
                    </Badge>
                    <code className="text-sm font-mono text-foreground truncate">
                      {endpoint.endpoint}
                    </code>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{formatNumber(endpoint.calls)} calls</span>
                    <span>{endpoint.avgLatency}ms avg</span>
                    <span className={endpoint.errorRate > 0.2 ? 'text-[oklch(0.62_0.24_25)]' : ''}>
                      {endpoint.errorRate}% errors
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <TrendUp
                  className={`w-4 h-4 ${
                    endpoint.trend > 0
                      ? 'text-[oklch(0.65_0.20_145)]'
                      : 'text-[oklch(0.62_0.24_25)] rotate-180'
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                    endpoint.trend > 0
                      ? 'text-[oklch(0.65_0.20_145)]'
                      : 'text-[oklch(0.62_0.24_25)]'
                  }`}
                >
                  {Math.abs(endpoint.trend)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
