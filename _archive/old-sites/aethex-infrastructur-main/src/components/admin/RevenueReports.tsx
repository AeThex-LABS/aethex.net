import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CurrencyDollar, TrendUp, DownloadSimple, ChartLine } from '@phosphor-icons/react'
import { useKV } from '@github/spark/hooks'
import { toast } from 'sonner'

interface MonthlyRevenue {
  month: string
  revenue: number
  growth: number
  newCustomers: number
  churnedCustomers: number
}

interface RevenueByPlan {
  plan: 'Free' | 'Pro' | 'Enterprise'
  revenue: number
  customers: number
  percentage: number
  avgRevenuePerCustomer: number
}

export function RevenueReports() {
  const [timeRange, setTimeRange] = useState('12m')
  const [monthlyRevenue, setMonthlyRevenue] = useKV<MonthlyRevenue[]>('admin-monthly-revenue', [])
  const [revenueByPlan, setRevenueByPlan] = useKV<RevenueByPlan[]>('admin-revenue-by-plan', [])
  const [totalRevenue, setTotalRevenue] = useKV<number>('admin-total-revenue', 0)
  const [mrr, setMrr] = useKV<number>('admin-mrr', 0)

  useEffect(() => {
    if (!monthlyRevenue || monthlyRevenue.length === 0) {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const currentMonth = new Date().getMonth()
      
      const data: MonthlyRevenue[] = []
      for (let i = 11; i >= 0; i--) {
        const monthIndex = (currentMonth - i + 12) % 12
        const baseRevenue = 25000 + Math.random() * 15000
        const growth = -5 + Math.random() * 25
        
        data.push({
          month: months[monthIndex],
          revenue: Math.floor(baseRevenue),
          growth: parseFloat(growth.toFixed(1)),
          newCustomers: Math.floor(5 + Math.random() * 15),
          churnedCustomers: Math.floor(Math.random() * 5)
        })
      }
      
      setMonthlyRevenue(data)
    }

    if (!revenueByPlan || revenueByPlan.length === 0) {
      setRevenueByPlan([
        {
          plan: 'Enterprise',
          revenue: 104958,
          customers: 42,
          percentage: 71.8,
          avgRevenuePerCustomer: 2499
        },
        {
          plan: 'Pro',
          revenue: 23322,
          customers: 78,
          percentage: 15.9,
          avgRevenuePerCustomer: 299
        },
        {
          plan: 'Free',
          revenue: 0,
          customers: 127,
          percentage: 0,
          avgRevenuePerCustomer: 0
        }
      ])
    }

    if (!totalRevenue || totalRevenue === 0) {
      setTotalRevenue(585600)
    }

    if (!mrr || mrr === 0) {
      setMrr(48750)
    }
  }, [])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const getPlanColor = (plan: RevenueByPlan['plan']) => {
    switch (plan) {
      case 'Enterprise':
        return 'bg-primary'
      case 'Pro':
        return 'bg-accent'
      case 'Free':
        return 'bg-muted-foreground'
    }
  }

  const handleExportCSV = () => {
    const csvContent = [
      ['Month', 'Revenue', 'Growth %', 'New Customers', 'Churned Customers'].join(','),
      ...(monthlyRevenue || []).map(m => 
        [m.month, m.revenue, m.growth, m.newCustomers, m.churnedCustomers].join(',')
      )
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `revenue-report-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
    
    toast.success('Revenue report exported successfully')
  }

  const maxRevenue = Math.max(...(monthlyRevenue || []).map(m => m.revenue))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Revenue Reports</h2>
          <p className="text-muted-foreground">Financial metrics and growth tracking</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3m">Last 3 Months</SelectItem>
              <SelectItem value="6m">Last 6 Months</SelectItem>
              <SelectItem value="12m">Last 12 Months</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleExportCSV} className="gap-2">
            <DownloadSimple className="w-4 h-4" />
            Export CSV
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-[oklch(0.65_0.20_145)]/10">
              <CurrencyDollar className="w-5 h-5 text-[oklch(0.65_0.20_145)]" weight="bold" />
            </div>
            <p className="text-sm text-muted-foreground">Total Revenue</p>
          </div>
          <p className="text-3xl font-bold text-foreground">{formatCurrency(totalRevenue || 0)}</p>
          <div className="flex items-center gap-1 mt-2">
            <TrendUp className="w-4 h-4 text-[oklch(0.65_0.20_145)]" />
            <span className="text-sm text-[oklch(0.65_0.20_145)]">+24% YoY</span>
          </div>
        </Card>

        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <ChartLine className="w-5 h-5 text-primary" weight="bold" />
            </div>
            <p className="text-sm text-muted-foreground">MRR</p>
          </div>
          <p className="text-3xl font-bold text-foreground">{formatCurrency(mrr || 0)}</p>
          <div className="flex items-center gap-1 mt-2">
            <TrendUp className="w-4 h-4 text-[oklch(0.65_0.20_145)]" />
            <span className="text-sm text-[oklch(0.65_0.20_145)]">+18% this month</span>
          </div>
        </Card>

        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <CurrencyDollar className="w-5 h-5 text-accent" weight="bold" />
            </div>
            <p className="text-sm text-muted-foreground">ARR</p>
          </div>
          <p className="text-3xl font-bold text-foreground">{formatCurrency((mrr || 0) * 12)}</p>
          <p className="text-sm text-muted-foreground mt-2">Annual run rate</p>
        </Card>

        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-[oklch(0.80_0.15_85)]/10">
              <TrendUp className="w-5 h-5 text-[oklch(0.80_0.15_85)]" weight="bold" />
            </div>
            <p className="text-sm text-muted-foreground">ARPU</p>
          </div>
          <p className="text-3xl font-bold text-foreground">{formatCurrency(197)}</p>
          <p className="text-sm text-muted-foreground mt-2">Avg revenue per user</p>
        </Card>
      </div>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">Monthly Revenue Trend</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-12 gap-2 items-end h-64">
            {(monthlyRevenue || []).map((month, index) => {
              const height = (month.revenue / maxRevenue) * 100
              return (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="flex-1 w-full flex items-end">
                    <div
                      className="w-full bg-primary hover:bg-primary/80 transition-all duration-300 rounded-t-md relative group cursor-pointer"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-popover border border-border rounded-lg p-2 shadow-lg whitespace-nowrap z-10">
                        <p className="text-xs font-medium">{month.month}</p>
                        <p className="text-sm font-bold">{formatCurrency(month.revenue)}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <TrendUp
                            className={`w-3 h-3 ${
                              month.growth > 0
                                ? 'text-[oklch(0.65_0.20_145)]'
                                : 'text-[oklch(0.62_0.24_25)] rotate-180'
                            }`}
                          />
                          <span
                            className={`text-xs ${
                              month.growth > 0
                                ? 'text-[oklch(0.65_0.20_145)]'
                                : 'text-[oklch(0.62_0.24_25)]'
                            }`}
                          >
                            {month.growth > 0 ? '+' : ''}{month.growth}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{month.month}</span>
                </div>
              )
            })}
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">Revenue by Plan</h3>
        <div className="space-y-6">
          {(revenueByPlan || []).map((plan) => (
            <div key={plan.plan} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className={
                      plan.plan === 'Enterprise'
                        ? 'bg-primary/20 text-primary border-primary/30'
                        : plan.plan === 'Pro'
                        ? 'bg-accent/20 text-accent border-accent/30'
                        : 'bg-muted text-muted-foreground border-border'
                    }
                  >
                    {plan.plan}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {plan.customers} customers
                  </span>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{formatCurrency(plan.revenue)}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatCurrency(plan.avgRevenuePerCustomer)}/customer
                  </p>
                </div>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${getPlanColor(plan.plan)} transition-all duration-500`}
                  style={{ width: `${plan.percentage}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{plan.percentage}% of total revenue</span>
                {plan.plan !== 'Free' && (
                  <span>
                    {formatCurrency(plan.revenue / 12)}/month
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">Customer Movement</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">New Customers</p>
            <p className="text-3xl font-bold text-[oklch(0.65_0.20_145)]">
              {(monthlyRevenue || []).reduce((sum, m) => sum + m.newCustomers, 0)}
            </p>
            <p className="text-xs text-muted-foreground">Last 12 months</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Churned Customers</p>
            <p className="text-3xl font-bold text-[oklch(0.62_0.24_25)]">
              {(monthlyRevenue || []).reduce((sum, m) => sum + m.churnedCustomers, 0)}
            </p>
            <p className="text-xs text-muted-foreground">Last 12 months</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Net Growth</p>
            <p className="text-3xl font-bold text-primary">
              {(monthlyRevenue || []).reduce((sum, m) => sum + m.newCustomers - m.churnedCustomers, 0)}
            </p>
            <p className="text-xs text-muted-foreground">Last 12 months</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
