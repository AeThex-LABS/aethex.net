import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useKV } from '@github/spark/hooks'
import { Bell, Lightning, Users, TrendUp, Warning, CheckCircle } from '@phosphor-icons/react'
import { toast } from 'sonner'
import { NotificationTester } from './NotificationTester'

interface NotificationSettings {
  apiUsageThreshold: number
  apiSpikesEnabled: boolean
  apiLimitEnabled: boolean
  upgradesEnabled: boolean
  downgradesEnabled: boolean
  newCustomersEnabled: boolean
  systemAlertsEnabled: boolean
  milestonesEnabled: boolean
  emailNotifications: boolean
  browserNotifications: boolean
}

const defaultSettings: NotificationSettings = {
  apiUsageThreshold: 80,
  apiSpikesEnabled: true,
  apiLimitEnabled: true,
  upgradesEnabled: true,
  downgradesEnabled: true,
  newCustomersEnabled: true,
  systemAlertsEnabled: true,
  milestonesEnabled: true,
  emailNotifications: false,
  browserNotifications: true
}

export function NotificationSettings() {
  const [settings, setSettings] = useKV<NotificationSettings>('admin-notification-settings', defaultSettings)

  const handleSettingChange = (key: keyof NotificationSettings, value: boolean | number) => {
    setSettings((current) => ({
      ...(current || defaultSettings),
      [key]: value
    }))
  }

  const handleSave = () => {
    toast.success('Notification settings saved', {
      description: 'Your preferences have been updated successfully'
    })
  }

  const currentSettings = settings || defaultSettings

  return (
    <div className="space-y-6">
      <NotificationTester />
      
      <Card className="p-6 bg-card border-border">
        <div className="flex items-start gap-3 mb-6">
          <div className="p-2 rounded-lg bg-primary/10">
            <Bell className="w-5 h-5 text-primary" weight="fill" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Notification Settings</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Configure which events trigger notifications and set alert thresholds
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-foreground mb-4">API Usage Alerts</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border">
                <div className="flex items-start gap-3 flex-1">
                  <Lightning className="w-5 h-5 text-[oklch(0.80_0.15_85)] mt-0.5" weight="fill" />
                  <div>
                    <Label htmlFor="api-spikes" className="text-sm font-medium">
                      API Usage Spikes
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Alert when customer exceeds usage threshold
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <Label htmlFor="threshold" className="text-xs text-muted-foreground">
                        Threshold:
                      </Label>
                      <Input
                        id="threshold"
                        type="number"
                        min="50"
                        max="100"
                        value={currentSettings.apiUsageThreshold}
                        onChange={(e) => handleSettingChange('apiUsageThreshold', parseInt(e.target.value))}
                        className="w-20 h-8 text-sm"
                        disabled={!currentSettings.apiSpikesEnabled}
                      />
                      <span className="text-xs text-muted-foreground">% of monthly quota</span>
                    </div>
                  </div>
                </div>
                <Switch
                  id="api-spikes"
                  checked={currentSettings.apiSpikesEnabled}
                  onCheckedChange={(checked) => handleSettingChange('apiSpikesEnabled', checked)}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border">
                <div className="flex items-start gap-3 flex-1">
                  <Warning className="w-5 h-5 text-[oklch(0.62_0.24_25)] mt-0.5" weight="fill" />
                  <div>
                    <Label htmlFor="api-limit" className="text-sm font-medium">
                      API Rate Limits
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Alert when customers hit their rate limits
                    </p>
                  </div>
                </div>
                <Switch
                  id="api-limit"
                  checked={currentSettings.apiLimitEnabled}
                  onCheckedChange={(checked) => handleSettingChange('apiLimitEnabled', checked)}
                />
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-medium text-foreground mb-4">Customer Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border">
                <div className="flex items-start gap-3 flex-1">
                  <TrendUp className="w-5 h-5 text-[oklch(0.65_0.20_145)] mt-0.5" weight="bold" />
                  <div>
                    <Label htmlFor="upgrades" className="text-sm font-medium">
                      Plan Upgrades
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Notify when customers upgrade their plan
                    </p>
                  </div>
                </div>
                <Switch
                  id="upgrades"
                  checked={currentSettings.upgradesEnabled}
                  onCheckedChange={(checked) => handleSettingChange('upgradesEnabled', checked)}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border">
                <div className="flex items-start gap-3 flex-1">
                  <TrendUp className="w-5 h-5 text-muted-foreground mt-0.5 rotate-180" weight="bold" />
                  <div>
                    <Label htmlFor="downgrades" className="text-sm font-medium">
                      Plan Downgrades
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Alert when customers downgrade their plan
                    </p>
                  </div>
                </div>
                <Switch
                  id="downgrades"
                  checked={currentSettings.downgradesEnabled}
                  onCheckedChange={(checked) => handleSettingChange('downgradesEnabled', checked)}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border">
                <div className="flex items-start gap-3 flex-1">
                  <Users className="w-5 h-5 text-primary mt-0.5" weight="bold" />
                  <div>
                    <Label htmlFor="new-customers" className="text-sm font-medium">
                      New Customer Signups
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Notify on new customer registrations
                    </p>
                  </div>
                </div>
                <Switch
                  id="new-customers"
                  checked={currentSettings.newCustomersEnabled}
                  onCheckedChange={(checked) => handleSettingChange('newCustomersEnabled', checked)}
                />
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-medium text-foreground mb-4">System & Milestones</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border">
                <div className="flex items-start gap-3 flex-1">
                  <Warning className="w-5 h-5 text-[oklch(0.80_0.15_85)] mt-0.5" weight="fill" />
                  <div>
                    <Label htmlFor="system-alerts" className="text-sm font-medium">
                      System Alerts
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Critical system warnings and infrastructure alerts
                    </p>
                  </div>
                </div>
                <Switch
                  id="system-alerts"
                  checked={currentSettings.systemAlertsEnabled}
                  onCheckedChange={(checked) => handleSettingChange('systemAlertsEnabled', checked)}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border">
                <div className="flex items-start gap-3 flex-1">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" weight="fill" />
                  <div>
                    <Label htmlFor="milestones" className="text-sm font-medium">
                      Milestones
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Revenue and usage milestone achievements
                    </p>
                  </div>
                </div>
                <Switch
                  id="milestones"
                  checked={currentSettings.milestonesEnabled}
                  onCheckedChange={(checked) => handleSettingChange('milestonesEnabled', checked)}
                />
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-medium text-foreground mb-4">Delivery Methods</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border">
                <div className="flex items-start gap-3 flex-1">
                  <Bell className="w-5 h-5 text-primary mt-0.5" weight="fill" />
                  <div>
                    <Label htmlFor="browser-notifications" className="text-sm font-medium">
                      Browser Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Show notifications in the admin dashboard
                    </p>
                  </div>
                </div>
                <Switch
                  id="browser-notifications"
                  checked={currentSettings.browserNotifications}
                  onCheckedChange={(checked) => handleSettingChange('browserNotifications', checked)}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border">
                <div className="flex items-start gap-3 flex-1">
                  <Bell className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <Label htmlFor="email-notifications" className="text-sm font-medium">
                      Email Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Send critical alerts via email (Pro feature)
                    </p>
                  </div>
                </div>
                <Switch
                  id="email-notifications"
                  checked={currentSettings.emailNotifications}
                  onCheckedChange={(checked) => handleSettingChange('emailNotifications', checked)}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border flex justify-end">
          <Button onClick={handleSave} className="gap-2">
            <CheckCircle className="w-4 h-4" weight="fill" />
            Save Settings
          </Button>
        </div>
      </Card>
    </div>
  )
}
