import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { AuthDialog } from '@/components/AuthDialog'
import { useAuth } from '@/contexts/AuthContext'
import { ARMS } from '@/lib/constants'
import { 
  Book, 
  ChartLine, 
  Code,
  List,
  X,
  Sparkle,
  ShieldCheck,
  Lightning,
  SignOut,
  User,
  Globe,
  CaretDown
} from '@phosphor-icons/react'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const navItems = [
  { path: '/docs', label: 'Documentation', icon: Book },
  { path: '/playground', label: 'Playground', icon: Lightning },
  { path: '/globe', label: 'Globe', icon: Globe },
  { path: '/status', label: 'Status', icon: ChartLine },
  { path: '/showcase', label: 'Customers', icon: Sparkle }
]

export function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, signOut } = useAuth()

  const getUserInitials = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name
        .split(' ')
        .map((n: string) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }
    return user?.email?.slice(0, 2).toUpperCase() || 'U'
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="AeThex Logo" className="h-9 w-9" />
            <div className="text-xl font-bold">
              <span className="gradient-text">
                AeThex
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="px-4 py-2.5 rounded-lg transition-all flex items-center gap-1.5 text-sm font-medium hover:bg-white/5 hover:text-primary" title="Products">
                  Products
                  <CaretDown size={12} weight="bold" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 glass">
                <DropdownMenuLabel>ARM Products</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {ARMS.map((arm) => (
                  <DropdownMenuItem key={arm.id} asChild>
                    <Link to={`/${arm.id}`} className="flex items-center gap-3 cursor-pointer">
                      <div 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: arm.color }}
                      />
                      <span>{arm.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  title={item.label}
                  className={`p-2.5 rounded-lg transition-all flex items-center justify-center ${
                    isActive ? 'bg-primary/20 text-primary' : 'hover:bg-white/5 hover:text-primary'
                  }`}
                >
                  <Icon size={20} weight={isActive ? 'fill' : 'regular'} />
                </Link>
              )
            })}
            <Link
              to="/admin"
              title="Admin"
              className={`p-2.5 rounded-lg transition-all flex items-center justify-center ${
                location.pathname === '/admin' ? 'bg-primary/20 text-primary' : 'hover:bg-white/5 hover:text-primary'
              }`}
            >
              <ShieldCheck size={20} weight={location.pathname === '/admin' ? 'fill' : 'regular'} />
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2 h-9 px-3 hover:bg-white/5">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs bg-primary/20 text-primary">
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="max-w-[120px] truncate text-sm">
                      {user.email}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass w-48">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/admin" className="flex items-center gap-2 cursor-pointer">
                      <User size={16} />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut} className="flex items-center gap-2 text-red-500 cursor-pointer">
                    <SignOut size={16} />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <AuthDialog trigger={<Button variant="ghost" size="sm" className="h-9 px-4 hover:bg-white/5">Sign In</Button>} />
                <AuthDialog trigger={
                  <Button size="sm" className="bg-gradient-to-r from-primary to-neon-purple hover:opacity-90 h-9 px-5 font-semibold shadow-lg shadow-primary/20">
                    Get Started
                  </Button>
                } />
              </>
            )}
          </div>

          <button
            className="lg:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} weight="bold" />
            ) : (
              <List size={24} weight="bold" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-4 pt-4 border-t border-white/10"
          >
            <nav className="flex flex-col gap-1.5 mb-4">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                      isActive ? 'bg-primary/20 text-primary' : 'hover:bg-white/5'
                    }`}
                  >
                    <Icon size={20} weight={isActive ? 'fill' : 'regular'} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg transition-all flex items-center gap-3 hover:bg-white/5"
              >
                <span className="font-medium">Pricing</span>
              </a>
              <Link
                to="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                  location.pathname === '/admin' ? 'bg-primary/20 text-primary' : 'hover:bg-white/5'
                }`}
              >
                <ShieldCheck size={20} weight={location.pathname === '/admin' ? 'fill' : 'regular'} />
                <span className="font-medium">Admin</span>
              </Link>
            </nav>
            <div className="flex flex-col gap-2.5 pb-2">
              <Button variant="ghost" className="w-full justify-center hover:bg-white/5">Sign In</Button>
              <Button className="w-full justify-center bg-gradient-to-r from-primary to-neon-purple hover:opacity-90 shadow-lg shadow-primary/20">
                Start Free Trial
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}
