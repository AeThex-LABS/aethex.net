import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'
import { Lightning, GithubLogo, DiscordLogo, TwitterLogo, LinkedinLogo } from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 w-fit group">
              <img src="/logo.png" alt="AeThex Logo" className="h-10 w-10 group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-bold gradient-text">AeThex</span>
            </Link>
            <p className="text-muted-foreground/90 mb-6 leading-relaxed max-w-md">
              Enterprise API for real-time game state synchronization across all platforms.
              Built by developers, for developers.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <a
                href="https://github.com/aethex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <GithubLogo size={22} weight="fill" />
              </a>
              <a
                href="https://discord.gg/aethex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
                aria-label="Discord"
              >
                <DiscordLogo size={22} weight="fill" />
              </a>
              <a
                href="https://twitter.com/aethexdev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
                aria-label="Twitter"
              >
                <TwitterLogo size={22} weight="fill" />
              </a>
              <a
                href="https://linkedin.com/company/aethex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={22} weight="fill" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground/70">
              © {new Date().getFullYear()} AeThex. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#pricing" className="text-muted-foreground/80 hover:text-primary transition-colors">Pricing</a></li>
              <li><Link to="/docs" className="text-muted-foreground/80 hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link to="/playground" className="text-muted-foreground/80 hover:text-primary transition-colors">API Playground</Link></li>
              <li><Link to="/status" className="text-muted-foreground/80 hover:text-primary transition-colors">Status</Link></li>
              <li><Link to="/showcase" className="text-muted-foreground/80 hover:text-primary transition-colors">Customers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">Developers</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://github.com/aethex/examples"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground/80 hover:text-primary transition-colors"
                >
                  Example Projects
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/aethex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground/80 hover:text-primary transition-colors"
                >
                  Discord Community
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/questions/tagged/aethex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground/80 hover:text-primary transition-colors"
                >
                  Stack Overflow
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/aethex/sdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground/80 hover:text-primary transition-colors"
                >
                  SDK on GitHub
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-muted-foreground/80 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-muted-foreground/80 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-muted-foreground/80 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-muted-foreground/80 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/press" className="text-muted-foreground/80 hover:text-primary transition-colors">Press Kit</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-8 opacity-20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground/70 hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="text-muted-foreground/30">•</span>
            <Link to="/terms" className="text-muted-foreground/70 hover:text-primary transition-colors">Terms of Service</Link>
            <span className="text-muted-foreground/30">•</span>
            <Link to="/security" className="text-muted-foreground/70 hover:text-primary transition-colors">Security</Link>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <span className="px-3 py-1 rounded-full glass text-muted-foreground/70 font-medium">SOC 2 Certified</span>
            <span className="px-3 py-1 rounded-full glass text-muted-foreground/70 font-medium">GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
