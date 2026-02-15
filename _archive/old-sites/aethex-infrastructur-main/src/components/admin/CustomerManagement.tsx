import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { MagnifyingGlass, TrendUp, Users, Lightning, Eye } from '@phosphor-icons/react'
import { useKV } from '@github/spark/hooks'

interface Customer {
  id: string
  name: string
  email: string
  company: string
  plan: 'Free' | 'Pro' | 'Enterprise'
  status: 'active' | 'inactive' | 'trial'
  apiCallsThisMonth: number
  mrr: number
  signupDate: Date
  lastActive: Date
}

export function CustomerManagement() {
  const [customers, setCustomers] = useKV<Customer[]>('admin-customers', [])
  const [searchQuery, setSearchQuery] = useState('')
  const [filterPlan, setFilterPlan] = useState<string>('all')
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false)

  useEffect(() => {
    if (!customers || customers.length === 0) {
      const sampleCustomers: Customer[] = [
        {
          id: '1',
          name: 'Sarah Chen',
          email: 'sarah@nexusgaming.io',
          company: 'Nexus Gaming',
          plan: 'Enterprise',
          status: 'active',
          apiCallsThisMonth: 2847629,
          mrr: 2499,
          signupDate: new Date('2024-01-15'),
          lastActive: new Date(Date.now() - 1000 * 60 * 15)
        },
        {
          id: '2',
          name: 'Michael Torres',
          email: 'michael@pixelforge.com',
          company: 'Pixel Forge Studios',
          plan: 'Pro',
          status: 'active',
          apiCallsThisMonth: 847293,
          mrr: 299,
          signupDate: new Date('2024-02-20'),
          lastActive: new Date(Date.now() - 1000 * 60 * 120)
        },
        {
          id: '3',
          name: 'Emily Rodriguez',
          email: 'emily@quantum.games',
          company: 'Quantum Games',
          plan: 'Enterprise',
          status: 'active',
          apiCallsThisMonth: 5284721,
          mrr: 2499,
          signupDate: new Date('2023-11-10'),
          lastActive: new Date(Date.now() - 1000 * 60 * 30)
        },
        {
          id: '4',
          name: 'David Park',
          email: 'david@indiedev.co',
          company: 'Indie Dev Collective',
          plan: 'Free',
          status: 'trial',
          apiCallsThisMonth: 12847,
          mrr: 0,
          signupDate: new Date('2024-03-01'),
          lastActive: new Date(Date.now() - 1000 * 60 * 60)
        },
        {
          id: '5',
          name: 'Jessica Liu',
          email: 'jessica@epicventures.com',
          company: 'Epic Ventures',
          plan: 'Pro',
          status: 'active',
          apiCallsThisMonth: 1284732,
          mrr: 299,
          signupDate: new Date('2024-01-25'),
          lastActive: new Date(Date.now() - 1000 * 60 * 45)
        },
        {
          id: '6',
          name: 'Robert Kim',
          email: 'robert@stealthstudios.io',
          company: 'Stealth Studios',
          plan: 'Enterprise',
          status: 'active',
          apiCallsThisMonth: 3847265,
          mrr: 2499,
          signupDate: new Date('2023-12-05'),
          lastActive: new Date(Date.now() - 1000 * 60 * 90)
        },
        {
          id: '7',
          name: 'Amanda Foster',
          email: 'amanda@casualgames.dev',
          company: 'Casual Games Inc',
          plan: 'Pro',
          status: 'inactive',
          apiCallsThisMonth: 42,
          mrr: 299,
          signupDate: new Date('2024-02-10'),
          lastActive: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15)
        },
        {
          id: '8',
          name: 'James Wilson',
          email: 'james@mobilefirst.app',
          company: 'Mobile First Gaming',
          plan: 'Free',
          status: 'active',
          apiCallsThisMonth: 8473,
          mrr: 0,
          signupDate: new Date('2024-03-05'),
          lastActive: new Date(Date.now() - 1000 * 60 * 180)
        }
      ]
      setCustomers(sampleCustomers)
    }
  }, [])

  const filteredCustomers = (customers || []).filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.company.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesPlan = filterPlan === 'all' || customer.plan === filterPlan
    const matchesStatus = filterStatus === 'all' || customer.status === filterStatus
    
    return matchesSearch && matchesPlan && matchesStatus
  })

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

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
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

  const getPlanBadgeColor = (plan: Customer['plan']) => {
    switch (plan) {
      case 'Enterprise':
        return 'bg-primary/20 text-primary border-primary/30'
      case 'Pro':
        return 'bg-accent/20 text-accent border-accent/30'
      case 'Free':
        return 'bg-muted text-muted-foreground border-border'
    }
  }

  const getStatusBadgeColor = (status: Customer['status']) => {
    switch (status) {
      case 'active':
        return 'bg-[oklch(0.65_0.20_145)]/20 text-[oklch(0.65_0.20_145)] border-[oklch(0.65_0.20_145)]/30'
      case 'trial':
        return 'bg-[oklch(0.80_0.15_85)]/20 text-[oklch(0.80_0.15_85)] border-[oklch(0.80_0.15_85)]/30'
      case 'inactive':
        return 'bg-muted text-muted-foreground border-border'
    }
  }

  const viewCustomerDetails = (customer: Customer) => {
    setSelectedCustomer(customer)
    setIsDetailDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-card border-border">
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search customers by name, email, or company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-3">
            <Select value={filterPlan} onValueChange={setFilterPlan}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="All Plans" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Plans</SelectItem>
                <SelectItem value="Enterprise">Enterprise</SelectItem>
                <SelectItem value="Pro">Pro</SelectItem>
                <SelectItem value="Free">Free</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="trial">Trial</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30">
                <TableHead>Customer</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">API Calls</TableHead>
                <TableHead className="text-right">MRR</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.id} className="hover:bg-muted/20">
                  <TableCell>
                    <div>
                      <p className="font-medium text-foreground">{customer.name}</p>
                      <p className="text-sm text-muted-foreground">{customer.company}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getPlanBadgeColor(customer.plan)}>
                      {customer.plan}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusBadgeColor(customer.status)}>
                      {customer.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-mono text-sm">
                    {formatNumber(customer.apiCallsThisMonth)}
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {formatCurrency(customer.mrr)}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {getTimeAgo(customer.lastActive)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => viewCustomerDetails(customer)}
                      className="gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredCustomers.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">No customers found matching your filters</p>
          </div>
        )}
      </Card>

      <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Customer Details</DialogTitle>
            <DialogDescription>
              Detailed information and usage metrics
            </DialogDescription>
          </DialogHeader>
          
          {selectedCustomer && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Name</p>
                  <p className="font-medium">{selectedCustomer.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium">{selectedCustomer.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Company</p>
                  <p className="font-medium">{selectedCustomer.company}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Customer ID</p>
                  <p className="font-mono text-sm">{selectedCustomer.id}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <Card className="p-4 bg-muted/30">
                  <p className="text-sm text-muted-foreground mb-2">Current Plan</p>
                  <Badge variant="outline" className={getPlanBadgeColor(selectedCustomer.plan)}>
                    {selectedCustomer.plan}
                  </Badge>
                </Card>
                <Card className="p-4 bg-muted/30">
                  <p className="text-sm text-muted-foreground mb-2">Status</p>
                  <Badge variant="outline" className={getStatusBadgeColor(selectedCustomer.status)}>
                    {selectedCustomer.status}
                  </Badge>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border">
                <Card className="p-4 bg-primary/10 border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightning className="w-4 h-4 text-primary" />
                    <p className="text-sm text-muted-foreground">API Calls</p>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    {formatNumber(selectedCustomer.apiCallsThisMonth)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">This month</p>
                </Card>

                <Card className="p-4 bg-accent/10 border-accent/20">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendUp className="w-4 h-4 text-accent" />
                    <p className="text-sm text-muted-foreground">MRR</p>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    {formatCurrency(selectedCustomer.mrr)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Monthly</p>
                </Card>

                <Card className="p-4 bg-muted/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-foreground" />
                    <p className="text-sm text-muted-foreground">Joined</p>
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {formatDate(selectedCustomer.signupDate)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Last active {getTimeAgo(selectedCustomer.lastActive)}
                  </p>
                </Card>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
