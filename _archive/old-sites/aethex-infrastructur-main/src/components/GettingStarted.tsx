import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { toast } from 'sonner'
import { 
  CheckCircle, 
  Lightning, 
  Code, 
  Key, 
  ArrowRight,
  Copy,
  Check
} from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollArea } from '@/components/ui/scroll-area'

interface GettingStartedProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const steps = [
  {
    id: 1,
    title: 'Get Your API Key',
    description: 'Copy your unique API key to authenticate requests',
    icon: Key
  },
  {
    id: 2,
    title: 'Install the SDK',
    description: 'Add AeThex to your project using your package manager',
    icon: Code
  },
  {
    id: 3,
    title: 'Make Your First Request',
    description: 'Test your integration with a simple API call',
    icon: Lightning
  },
  {
    id: 4,
    title: 'You\'re All Set!',
    description: 'Explore the docs and start building',
    icon: CheckCircle
  }
]

export function GettingStarted({ open, onOpenChange }: GettingStartedProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [copied, setCopied] = useState(false)
  const [apiKeyCopied, setApiKeyCopied] = useState(false)
  
  const apiKey = 'aethex_live_abc123xyz789_demo_key_not_real'
  const projectId = 'proj_demo_xyz789'

  const progress = (currentStep / steps.length) * 100

  const handleCopy = (text: string, isCopyingApiKey = false) => {
    navigator.clipboard.writeText(text)
    if (isCopyingApiKey) {
      setApiKeyCopied(true)
      setTimeout(() => setApiKeyCopied(false), 2000)
    } else {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
    toast.success('Copied to clipboard!')
  }

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    } else {
      toast.success('Welcome to AeThex! 🎉')
      onOpenChange(false)
      setCurrentStep(1)
    }
  }

  const handleSkip = () => {
    onOpenChange(false)
    setCurrentStep(1)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <Card className="p-5 glass border border-white/10">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">API Key</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy(apiKey, true)}
                    className="hover:bg-white/5"
                  >
                    {apiKeyCopied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  </Button>
                </div>
                <code className="block text-xs font-mono text-primary break-all px-2 py-1 bg-background/50 rounded">
                  {apiKey}
                </code>
              </div>
            </Card>

            <Card className="p-5 glass border border-white/10">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">Project ID</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy(projectId)}
                    className="hover:bg-white/5"
                  >
                    {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  </Button>
                </div>
                <code className="block text-xs font-mono text-primary px-2 py-1 bg-background/50 rounded">
                  {projectId}
                </code>
              </div>
            </Card>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
              <p className="text-sm text-blue-400 leading-relaxed">
                <strong className="font-semibold">Important:</strong> Keep your API key secure. Never commit it to version control or share it publicly.
              </p>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2 text-sm">JavaScript / Node.js</h4>
                <Card className="p-4 bg-muted relative group">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleCopy('npm install @aethex/sdk')}
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </Button>
                  <code className="text-sm font-mono">npm install @aethex/sdk</code>
                </Card>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-sm">Python</h4>
                <Card className="p-4 bg-muted relative group">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleCopy('pip install aethex-sdk')}
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </Button>
                  <code className="text-sm font-mono">pip install aethex-sdk</code>
                </Card>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-sm">Unity (C#)</h4>
                <Card className="p-4 bg-muted relative group">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleCopy('https://github.com/aethex/sdk-unity.git')}
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </Button>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Unity Package Manager → Add from git URL:</p>
                    <code className="text-xs font-mono block">
                      https://github.com/aethex/sdk-unity.git
                    </code>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Initialize the client and make your first API call to sync player state:
            </p>

            <ScrollArea className="h-[300px]">
              <Card className="p-4 bg-muted relative group">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  onClick={() => handleCopy(`import { AeThex } from '@aethex/sdk';

const client = new AeThex({
  apiKey: '${apiKey}',
  projectId: '${projectId}'
});

// Sync player state
const result = await client.sync.setState('player-123', {
  position: { x: 100, y: 50 },
  health: 100,
  inventory: ['sword', 'shield']
});

console.log('✓ State synced successfully!', result);`)}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </Button>
                <pre className="text-xs font-mono">
                  <code className="text-accent">{`import { AeThex } from '@aethex/sdk';

const client = new AeThex({
  apiKey: '${apiKey}',
  projectId: '${projectId}'
});

// Sync player state
const result = await client.sync.setState('player-123', {
  position: { x: 100, y: 50 },
  health: 100,
  inventory: ['sword', 'shield']
});

console.log('✓ State synced successfully!', result);`}</code>
                </pre>
              </Card>
            </ScrollArea>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <p className="text-sm text-green-400">
                <strong>Success!</strong> Your first API call is ready. Run this code to see it in action.
              </p>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.5 }}
            >
              <CheckCircle size={64} weight="duotone" className="mx-auto text-primary" />
            </motion.div>

            <div>
              <h3 className="text-2xl font-bold mb-2">You're All Set!</h3>
              <p className="text-muted-foreground">
                Your AeThex integration is ready. Here's what you can do next:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <Card className="p-4 text-left hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex items-start gap-3">
                  <Code size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Explore API Documentation</h4>
                    <p className="text-xs text-muted-foreground">
                      Learn about all available endpoints and features
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 text-left hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex items-start gap-3">
                  <Lightning size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Try the API Playground</h4>
                    <p className="text-xs text-muted-foreground">
                      Test endpoints with live requests and responses
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 text-left hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">View Example Projects</h4>
                    <p className="text-xs text-muted-foreground">
                      Check out sample integrations on GitHub
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center justify-between mb-2">
            <DialogTitle>Getting Started</DialogTitle>
            <Badge variant="secondary">{currentStep} / {steps.length}</Badge>
          </div>
          <DialogDescription>
            {steps[currentStep - 1]?.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between">
              {steps.map((step) => {
                const Icon = step.icon
                const isComplete = currentStep > step.id
                const isCurrent = currentStep === step.id
                
                return (
                  <div
                    key={step.id}
                    className={`flex flex-col items-center gap-1 ${
                      isCurrent ? 'text-primary' : isComplete ? 'text-green-500' : 'text-muted-foreground'
                    }`}
                  >
                    <Icon size={20} weight={isComplete ? 'fill' : isCurrent ? 'duotone' : 'regular'} />
                    <span className="text-xs hidden sm:block">{step.title}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <Button variant="ghost" onClick={handleSkip}>
              Skip Tutorial
            </Button>
            <Button onClick={handleNext}>
              {currentStep === steps.length ? 'Get Started' : 'Next'}
              {currentStep < steps.length && <ArrowRight size={16} className="ml-2" />}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
