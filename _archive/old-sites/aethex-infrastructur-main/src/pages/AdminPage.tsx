import { useState } from 'react'
import { DashboardOverview } from '@/components/admin/DashboardOverview'
import { CustomerManagement } from '@/components/admin/CustomerManagement'
import { UsageAnalytics } from '@/components/admin/UsageAnalytics'
import { RevenueReports } from '@/components/admin/RevenueReports'
import { NotificationCenter } from '@/components/admin/NotificationCenter'
import { NotificationSettings } from '@/components/admin/NotificationSettings'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Users, 
  CurrencyDollar, 
  ChartLine, 
  Lightning,
  Bell
} from '@phosphor-icons/react'

export function AdminPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">
                Manage customers, monitor usage, and track revenue metrics
              </p>
            </div>
            <NotificationCenter />
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5">
              <TabsTrigger value="overview" className="gap-2">
                <ChartLine className="w-4 h-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="customers" className="gap-2">
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Customers</span>
              </TabsTrigger>
              <TabsTrigger value="usage" className="gap-2">
                <Lightning className="w-4 h-4" />
                <span className="hidden sm:inline">Usage</span>
              </TabsTrigger>
              <TabsTrigger value="revenue" className="gap-2">
                <CurrencyDollar className="w-4 h-4" />
                <span className="hidden sm:inline">Revenue</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="gap-2">
                <Bell className="w-4 h-4" />
                <span className="hidden sm:inline">Alerts</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-8">
              <DashboardOverview />
            </TabsContent>

            <TabsContent value="customers" className="space-y-6 mt-8">
              <CustomerManagement />
            </TabsContent>

            <TabsContent value="usage" className="space-y-6 mt-8">
              <UsageAnalytics />
            </TabsContent>

            <TabsContent value="revenue" className="space-y-6 mt-8">
              <RevenueReports />
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6 mt-8">
              <NotificationSettings />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
