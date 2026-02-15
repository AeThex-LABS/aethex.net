# Planning Guide

A commercial B2B SaaS storefront for AeThex's cross-platform gaming infrastructure that enables software engineers and game studios to purchase enterprise API access, explore comprehensive developer documentation, and monitor real-time service status.

**Experience Qualities**:
1. **Professional** - Clean, trustworthy enterprise design that builds confidence with CTOs and technical buyers through clear value propositions and transparent pricing.
2. **Developer-First** - Comprehensive API documentation, interactive code examples, and technical depth that respects the intelligence of software engineers and technical decision-makers.
3. **Transparent** - Clear pricing, live status monitoring, and honest communication about capabilities and limitations that builds trust with enterprise customers.

**Complexity Level**: Complex Application (advanced functionality, likely with multiple views)
This is a commercial SaaS platform with pricing tables, API documentation systems, real-time status monitoring, authentication flows, and comprehensive developer resources across multiple pages and routes.

## Essential Features

### Enterprise Pricing & Plans
- **Functionality**: Clear pricing tiers (Free, Pro, Enterprise) with feature comparison table, usage limits, and CTA buttons for each tier
- **Purpose**: Convert visitors into paying customers by clearly communicating value propositions and pricing
- **Trigger**: Prominent "Pricing" section on homepage and dedicated pricing page accessible from header
- **Progression**: User views pricing tiers → Compares features across plans → Clicks "Start Free" or "Contact Sales" → For free tier: directed to sign-up flow → For enterprise: directed to contact form
- **Success criteria**: Pricing is clear and competitive, CTAs are prominent, feature differences are obvious, no confusion about what each tier includes

### API Documentation Hub
- **Functionality**: Comprehensive, searchable API reference with authentication guides, endpoint documentation, request/response examples, SDKs, and quickstart tutorials
- **Purpose**: Enable developers to quickly integrate AeThex infrastructure into their games and applications
- **Trigger**: Click "Documentation" or "API Docs" from header navigation
- **Progression**: User lands on docs homepage → Views quickstart guide or searches for specific endpoint → Selects API category (Authentication, State Sync, Player Management, etc.) → Views endpoint details with code examples → Can copy code snippets → Can test API calls in interactive playground
- **Success criteria**: Documentation is comprehensive and accurate, search works quickly, code examples are copy-pasteable, navigation is intuitive, examples work in multiple languages (JavaScript, C#, Python, etc.)

### Live Status Dashboard
- **Functionality**: Real-time system status page showing uptime, latency, and incident history for all AeThex services and regions
- **Purpose**: Build trust through transparency and provide technical teams with operational visibility
- **Trigger**: Click "Status" link in header or footer, or visit status.aethex.dev subdomain
- **Progression**: User lands on status dashboard → Views overall system health at a glance → Can drill into individual services (API, State Sync, Auth, Storage) → Views historical uptime (30/60/90 days) → Can subscribe to status updates via email/webhook → Views incident history with postmortems
- **Success criteria**: Status updates in real-time (or near real-time simulation), clear visual indicators (green/yellow/red), incident history is detailed, performance metrics are believable

### Interactive Code Playground
- **Functionality**: Live code editor where developers can test API calls, modify parameters, and see real responses without leaving the documentation
- **Purpose**: Reduce time-to-first-API-call and provide hands-on learning experience
- **Trigger**: Click "Try it" buttons in API documentation or dedicated "Playground" section
- **Progression**: User views code editor with sample request → Modifies parameters or request body → Clicks "Send Request" → Sees real-time response with syntax highlighting → Can save examples or generate code for different languages
- **Success criteria**: Editor has syntax highlighting, requests execute quickly, responses are formatted clearly, error messages are helpful

### Customer Showcase & Case Studies
- **Functionality**: Logos and testimonials from game studios and companies using AeThex infrastructure, with detailed case studies showing results
- **Purpose**: Provide social proof and demonstrate real-world value to prospective enterprise customers
- **Trigger**: "Customers" section on homepage or dedicated case studies page
- **Progression**: User views customer logos → Clicks on featured case study → Reads problem/solution/results narrative with metrics → Views technical implementation details → Sees CTA to "Build Your Own"
- **Success criteria**: Case studies are credible and detailed, metrics are specific and impressive, technical details show real implementation

### Getting Started Flow
- **Functionality**: Guided onboarding that takes new developers from account creation to first successful API call in under 5 minutes
- **Purpose**: Reduce friction for new users and increase activation rate
- **Trigger**: Click "Get Started" or "Start Free" CTAs throughout site
- **Progression**: User creates account → Receives API key → Follows interactive tutorial with step-by-step guidance → Makes first API call → Sees success confirmation → Directed to next steps (explore docs, view examples, join community)
- **Success criteria**: Flow is linear and clear, estimated time is accurate, users can complete without external help, success rate is high

### Developer Community Hub
- **Functionality**: Links to Discord, GitHub, Stack Overflow tag, and community-contributed examples and tutorials
- **Purpose**: Build developer community, provide peer support, and showcase ecosystem
- **Trigger**: "Community" link in header or dedicated section on docs page
- **Progression**: User views community resources → Can join Discord for real-time help → Browse GitHub examples and SDKs → View community-created tutorials and tools → Submit their own contributions
- **Success criteria**: Links are current and active, community appears vibrant, resources are valuable

### Admin Dashboard
- **Functionality**: Comprehensive admin interface for managing customers, viewing usage metrics, tracking revenue, and monitoring API consumption across all tiers
- **Purpose**: Enable AeThex staff to oversee business operations, identify high-value customers, monitor system usage, and make data-driven decisions
- **Trigger**: Authenticated admin users access /admin route with proper permissions
- **Progression**: Admin logs in → Views dashboard overview with key metrics (total customers, MRR, API calls today) → Can drill into customer list with filters → Views individual customer details with usage history → Can upgrade/downgrade plans → Views usage analytics by tier, endpoint, and time period → Exports reports
- **Success criteria**: All metrics are accurate and update in real-time, customer management is intuitive, usage charts are clear and actionable, data exports work correctly

### Real-Time Notification System
- **Functionality**: Live notification center that alerts admins about critical events including high API usage (80%+ of quota), customer upgrades/downgrades, new signups, API rate limit hits, revenue milestones, and system alerts
- **Purpose**: Enable rapid response to critical events, identify high-value customers for outreach, prevent API overages, and track business milestones in real-time
- **Trigger**: Automatic background monitoring generates notifications; admins access via bell icon in admin dashboard header with unread count badge
- **Progression**: System detects critical event → Notification created and stored → High/critical priority triggers toast alert → Bell icon shows unread count → Admin clicks bell → Notification panel slides out → Admin views details → Can mark as read, delete, or clear all → Admin configures thresholds and preferences in Alerts tab
- **Success criteria**: Notifications appear within seconds of events, toast alerts are non-intrusive but noticeable, all notification types are clearly differentiated with icons and colors, settings allow customization of thresholds and enabled events, live activity feed updates in real-time on dashboard

## Edge Case Handling

- **No Authentication**: Public pages (pricing, docs overview, status) accessible without login; advanced docs and playground require free account
- **API Rate Limiting**: Clear error messages when rate limits hit, upgrade prompts for higher tiers
- **Service Outages**: Status page remains accessible even during major outages (separate infrastructure)
- **Mobile Browsing**: Fully responsive design with optimized documentation navigation for mobile developers
- **Slow Connections**: Progressive loading, code examples load after critical content, lazy load testimonials
- **Copy/Paste Code**: All code examples have one-click copy buttons, preserve formatting
- **Search No Results**: Suggest related topics, provide feedback form to report missing docs

## Design Direction

The design should feel like a premium enterprise SaaS platform - professional, trustworthy, and sophisticated without being corporate or boring. Think Stripe, Vercel, or Cloudflare's design language: clean, developer-focused, with technical credibility. The interface should inspire confidence in technical decision-makers while being welcoming to developers who will actually implement the integration.

## Color Selection

Professional B2B color scheme that balances trust (blues) with AeThex's brand identity (purple), using dark mode as primary theme for developer appeal.

- **Primary Color**: AeThex Purple `oklch(0.62 0.24 286)` - Brand identity color for primary CTAs, pricing tier highlights, and key navigation elements. Communicates innovation while maintaining professional credibility.
- **Secondary Colors**: 
  - Professional Blue `oklch(0.60 0.20 250)` - Trust and stability indicators, used for informational elements and secondary CTAs
  - Success Green `oklch(0.65 0.20 145)` - Status indicators for "operational" states and positive metrics
  - Warning Yellow `oklch(0.80 0.15 85)` - Degraded performance or cautionary states
  - Error Red `oklch(0.62 0.24 25)` - Service outages and critical issues
  - Deep Space `oklch(0.10 0.02 265)` - Primary dark background
  - Card Surface `oklch(0.12 0.03 270)` - Elevated content cards and panels
- **Accent Color**: Electric Cyan `oklch(0.68 0.16 205)` - Code syntax highlighting, interactive elements, and "Try it" buttons in documentation. Creates visual distinction for interactive/technical elements.
- **Foreground/Background Pairings**: 
  - Background (Deep Space oklch(0.10 0.02 265)): White text (oklch(0.98 0 0)) - Ratio 16.2:1 ✓
  - Card Surface (oklch(0.12 0.03 270)): White text (oklch(0.98 0 0)) - Ratio 14.8:1 ✓
  - Primary Purple (oklch(0.62 0.24 286)): White text (oklch(0.98 0 0)) - Ratio 5.2:1 ✓
  - Success Green (oklch(0.65 0.20 145)): Deep Space (oklch(0.10 0.02 265)) - Ratio 8.4:1 ✓
  - Accent Cyan (oklch(0.68 0.16 205)): Deep Space (oklch(0.10 0.02 265)) - Ratio 7.8:1 ✓

## Font Selection

Typography should convey technical credibility and modern professionalism while maintaining excellent readability for extensive documentation.

- **Primary Font**: **Inter** - The industry-standard for SaaS products and developer tools. Excellent readability at all sizes, professional without being stuffy.
- **Headline Font**: **Space Grotesk** - Technical and modern for headlines and hero sections, creates visual interest while maintaining professionalism.
- **Monospace Font**: **JetBrains Mono** - Premium monospace font for code examples with excellent ligatures and character distinction.

- **Typographic Hierarchy**: 
  - H1 (Page Titles): Space Grotesk Bold/56px/tight (-0.02em) - Main hero headlines
  - H2 (Section Headers): Space Grotesk SemiBold/40px/tight (-0.01em) - Major sections
  - H3 (Subsections): Inter SemiBold/28px/normal - Documentation sections and features
  - H4 (Component Titles): Inter SemiBold/20px/normal - API endpoint names and smaller headings
  - Body (Content): Inter Regular/16px/relaxed (1.7) - Documentation content and descriptions
  - Small (Captions): Inter Regular/14px/normal - Pricing details and footnotes
  - Code: JetBrains Mono Regular/14px/1.6 - Code blocks and API examples
  - Code Inline: JetBrains Mono Regular/13px - Inline code references

## Animations

Animations should be subtle and professional, enhancing usability without drawing attention to themselves. Focus on smooth transitions and meaningful feedback.

- **Page Transitions**: Fade-in on route change (200ms) for seamless navigation between pages
- **Pricing Tier Hover**: Subtle lift (translateY -4px) and shadow enhancement (300ms) on pricing cards
- **CTA Buttons**: Scale (1.02) and glow effect on hover (150ms), pressed state (0.98 scale)
- **Code Copy**: Brief success animation with checkmark when code is copied (400ms)
- **Status Indicators**: Gentle pulse on "Operational" badges (2s infinite) to show live updates
- **Documentation Sidebar**: Smooth highlight transition when active section changes (250ms)
- **Metric Count-ups**: Number animations when status metrics come into view (1000ms with easing)
- **Section Reveals**: Subtle fade-in and slide-up (20px) as content enters viewport (400ms)
- **Dropdown Menus**: Smooth height transition with slight fade (200ms)

## Component Selection

- **Components**: 
  - **Button** - Primary CTAs ("Get Started", "Contact Sales") with variants for secondary actions
  - **Card** - Pricing tiers, feature comparisons, API endpoint cards, case study previews
  - **Tabs** - Switching between code examples in different languages, pricing billing cycles
  - **Table** - Feature comparison matrix, API reference parameters, pricing details
  - **Badge** - Status indicators (Operational/Degraded/Down), plan labels (Free/Pro/Enterprise)
  - **Separator** - Section dividers in documentation
  - **ScrollArea** - Code blocks, long API responses, documentation navigation
  - **Accordion** - FAQ sections, collapsible documentation sections on mobile
  - **Dialog** - Contact forms, sign-up modals
  - **Tooltip** - Additional context on features and pricing details
  - **Textarea** - API playground request bodies
  - **Input** - Search documentation, contact forms
  - **Select** - Region selection for status dashboard, language selection for code examples

- **Customizations**: 
  - Custom syntax highlighting for code blocks using dark theme with brand accent colors
  - Pricing card with gradient border and hover glow effect
  - Status dashboard with animated uptime bars and live metric updates
  - Interactive API playground with request/response panels
  - Custom copy-to-clipboard button component for code examples
  - Tiered pricing table with feature checkmarks and visual hierarchy

- **States**: 
  - Buttons: Default (solid bg), Hover (slight glow + scale), Active (pressed), Loading (spinner), Disabled (muted)
  - Status Badges: Operational (green pulse), Degraded (yellow), Down (red), Maintenance (blue)
  - Code Blocks: Default (syntax highlighted), Hover (show copy button), Copied (checkmark feedback)
  - Pricing Cards: Default (elevated), Hover (lift + glow), Selected (highlighted border)
  - API Endpoints: Idle, Hover (show "Try it"), Active (expanded with parameters), Loading (request in progress), Success (green response), Error (red error message)

- **Icon Selection**: 
  - **@phosphor-icons/react** for all UI icons
  - **CheckCircle** - Feature checkmarks, successful responses
  - **XCircle** - Errors, unavailable features
  - **Lightning** - Performance metrics, premium features
  - **Code** - Documentation, API reference
  - **Book** - Guides and tutorials
  - **ChartLine** - Status metrics, analytics
  - **Users** - Enterprise features, community
  - **Shield** - Security features, authentication
  - **Clock** - Uptime metrics, latency
  - **Globe** - Multi-region, global infrastructure
  - **Copy** - Copy code examples
  - **Check** - Copy success confirmation
  - **Play** - Run in playground
  - **CaretDown** - Dropdown indicators

- **Spacing**: 
  - Page padding: `py-24 px-6` (large screens), `py-16 px-4` (tablet), `py-12 px-4` (mobile)
  - Section gaps: `gap-24` (between major sections), `gap-12` (within sections)
  - Card padding: `p-8` (desktop), `p-6` (mobile)
  - Content max-width: `max-w-7xl` (general content), `max-w-4xl` (documentation prose)
  - Grid layouts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` for features, `grid-cols-3` for pricing tiers

- **Mobile**: 
  - Stack pricing cards vertically on mobile with full width
  - Collapsible documentation sidebar that slides in from left
  - Simplified status dashboard with key metrics only
  - Single-column layout for all content below 768px
  - Code blocks with horizontal scroll and sticky line numbers
  - Bottom sheet for mobile navigation menu
  - Larger touch targets (min 48px) for all interactive elements
  - Simplified pricing comparison table (show one tier at a time with tabs)
