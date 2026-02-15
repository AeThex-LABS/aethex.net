import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Toaster } from '@/components/ui/sonner'
import { HomePage } from '@/pages/HomePage'
import { DocsPage } from '@/pages/DocsPage'
import { StatusPage } from '@/pages/StatusPage'
import { ShowcasePage } from '@/pages/ShowcasePage'
import { AboutPage } from '@/pages/AboutPage'
import { BlogPage } from '@/pages/BlogPage'
import { CareersPage } from '@/pages/CareersPage'
import { ContactPage } from '@/pages/ContactPage'
import { PressPage } from '@/pages/PressPage'
import { PrivacyPage } from '@/pages/PrivacyPage'
import { TermsPage } from '@/pages/TermsPage'
import { SecurityPage } from '@/pages/SecurityPage'

// Lazy load heavy pages
const AdminPage = lazy(() => import('@/pages/AdminPage').then(m => ({ default: m.AdminPage })))
const PlaygroundPage = lazy(() => import('@/pages/PlaygroundPage').then(m => ({ default: m.PlaygroundPage })))
const CaseStudyPage = lazy(() => import('@/pages/CaseStudyPage').then(m => ({ default: m.CaseStudyPage })))
const GlobePage = lazy(() => import('@/pages/GlobePage').then(m => ({ default: m.GlobePage })))
const FoundationPage = lazy(() => import('@/pages/FoundationPage').then(m => ({ default: m.FoundationPage })))
const DevLinkPage = lazy(() => import('@/pages/DevLinkPage').then(m => ({ default: m.DevLinkPage })))
const LabsPage = lazy(() => import('@/pages/LabsPage').then(m => ({ default: m.LabsPage })))
const GameForgePage = lazy(() => import('@/pages/GameForgePage').then(m => ({ default: m.GameForgePage })))
const NexusPage = lazy(() => import('@/pages/NexusPage').then(m => ({ default: m.NexusPage })))
const CorpPage = lazy(() => import('@/pages/CorpPage').then(m => ({ default: m.CorpPage })))

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary/20 rounded-full" />
          <div className="absolute inset-0 w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
        <div className="text-center">
          <p className="text-muted-foreground text-base font-medium mb-1">Loading...</p>
          <p className="text-muted-foreground/60 text-sm">Please wait</p>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Suspense fallback={<LoadingFallback />}>
          <div className="page-fade-in">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/playground" element={<PlaygroundPage />} />
              <Route path="/status" element={<StatusPage />} />
              <Route path="/showcase" element={<ShowcasePage />} />
              <Route path="/case-study/:id" element={<CaseStudyPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/globe" element={<GlobePage />} />
              
              {/* ARM Product Pages */}
              <Route path="/foundation" element={<FoundationPage />} />
              <Route path="/devlink" element={<DevLinkPage />} />
              <Route path="/labs" element={<LabsPage />} />
              <Route path="/gameforge" element={<GameForgePage />} />
              <Route path="/nexus" element={<NexusPage />} />
              <Route path="/corp" element={<CorpPage />} />
              
              {/* Company & Legal Pages */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/press" element={<PressPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/security" element={<SecurityPage />} />
            </Routes>
          </div>
        </Suspense>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App