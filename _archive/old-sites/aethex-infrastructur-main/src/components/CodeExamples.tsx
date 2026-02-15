import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Code } from '@phosphor-icons/react'
import { CODE_EXAMPLES } from '@/lib/constants'

export function CodeExamples() {
  const [activeTab, setActiveTab] = useState('web')
  
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-4">
            <Code className="text-accent" weight="fill" />
            <span className="text-sm font-medium text-accent">Implementation</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Platform-Specific Code
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how easy it is to integrate AeThex sync into your projects across any platform
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-6 bg-card/50 backdrop-blur border-border overflow-hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="web" className="gap-2">
                  <span className="hidden sm:inline">Web</span>
                  <span className="sm:hidden">Web</span>
                </TabsTrigger>
                <TabsTrigger value="mobile" className="gap-2">
                  <span className="hidden sm:inline">Mobile</span>
                  <span className="sm:hidden">iOS</span>
                </TabsTrigger>
                <TabsTrigger value="console" className="gap-2">
                  <span className="hidden sm:inline">Console</span>
                  <span className="sm:hidden">C++</span>
                </TabsTrigger>
                <TabsTrigger value="pc" className="gap-2">
                  <span className="hidden sm:inline">PC</span>
                  <span className="sm:hidden">C#</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="web">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    TypeScript / JavaScript
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-neon-blue/20 text-neon-blue border border-neon-blue/30">
                    Web SDK
                  </span>
                </div>
                <ScrollArea className="h-[400px] w-full rounded-lg">
                  <pre className="p-6 bg-background/80 rounded-lg text-sm leading-relaxed">
                    <code>{CODE_EXAMPLES.web}</code>
                  </pre>
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="mobile">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    Swift / iOS
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30">
                    Mobile SDK
                  </span>
                </div>
                <ScrollArea className="h-[400px] w-full rounded-lg">
                  <pre className="p-6 bg-background/80 rounded-lg text-sm leading-relaxed">
                    <code>{CODE_EXAMPLES.mobile}</code>
                  </pre>
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="console">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    C++ / Unreal Engine
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gameforge-green/20 text-gameforge-green border border-gameforge-green/30">
                    Console SDK
                  </span>
                </div>
                <ScrollArea className="h-[400px] w-full rounded-lg">
                  <pre className="p-6 bg-background/80 rounded-lg text-sm leading-relaxed">
                    <code>{CODE_EXAMPLES.console}</code>
                  </pre>
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="pc">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    C# / Unity
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent border border-accent/30">
                    Unity SDK
                  </span>
                </div>
                <ScrollArea className="h-[400px] w-full rounded-lg">
                  <pre className="p-6 bg-background/80 rounded-lg text-sm leading-relaxed">
                    <code>{CODE_EXAMPLES.pc}</code>
                  </pre>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
