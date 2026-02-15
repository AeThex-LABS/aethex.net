# AeThex.net - The Gateway

**Where the Universe Meets You**

This is the consumer-facing portal for the AeThex ecosystem - the first touchpoint for players, creators, and anyone discovering AeThex.

## 🌐 Available Routes

### Main Pages
- **`/`** - Home page with hero, path selector, featured experiences, and Passport CTA
- **`/experiences`** - Browse all games and experiences built on AeThex
- **`/ecosystem`** - Interactive map and overview of the entire AeThex network
- **`/passport`** - Create your AeThex Passport (unified identity)
- **`/creators`** - Creator portal with tools, marketplace, and monetization info
- **`/foundation`** - Introduction to AeThex Foundation governance
- **`/status`** - Real-time system status and uptime monitoring

### Coming Soon
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service  
- `/about` - About AeThex
- `/community` - Community hub and forums
- `/blog` - News and updates
- `/support` - Help center and documentation

## 🌍 The AeThex Network

The complete AeThex ecosystem spans multiple domains, each serving a specific purpose:

### Consumer & Discovery
- **[aethex.net](https://aethex.net)** - The Gateway (this site)
  - Consumer portal where players and creators discover AeThex
  - Passport signup and management
  - Game/experience browsing
  - Creator onboarding

### Infrastructure & Development
- **[aethex.cloud](https://aethex.cloud)** - B2B SaaS Platform
  - API infrastructure and services for enterprise clients
  - Developer tools and SDKs
  - Infrastructure sales and pricing
  - REST APIs and WebSocket services

- **[aethex.inc](https://aethex.inc)** - Enterprise Solutions
  - Enterprise contracts and partnerships
  - Custom solutions and integrations
  - Business development and corporate services
  - White-label offerings and dedicated SLAs

- **[aethex.dev](https://aethex.dev)** - Developer Portal
  - Technical documentation and guides
  - API references and code samples
  - Developer resources and tutorials
  - Platform integration walkthroughs

- **[aethex.tech](https://aethex.tech)** - Integration Hub
  - Integration guides and SDK documentation
  - Platform-specific implementation guides (Roblox, Unity, Web, Unreal)
  - Technical architecture documentation
  - Best practices and patterns

### Governance & Philosophy
- **[aethex.foundation](https://aethex.foundation)** - Community Governance
  - "The Soul" - democratic governance system
  - Proposal creation and voting
  - Treasury management and transparency
  - Community moderation
  - Constitutional documents

- **[aethex.info](https://aethex.info)** - Unified Information Hub
  - Vision, lore, and mythology
  - Corporate information and investor relations
  - Press releases and media resources
  - Careers, contributions, and events
  - Consolidates all former .biz subdomains
  - Long-term roadmap and philosophical framework

- **[aethex.network](https://aethex.network)** - Ecosystem Connections
  - Cross-platform interoperability showcase
  - Partner integrations and connections
  - Network architecture and standards
  - Protocol specifications

### Creator & Community Tools
- **[aethex.studio](https://aethex.studio)** - The Labs
  - Experimental features and R&D
  - Innovation hub and prototypes
  - Early access to new tools
  - Community experiments and testing

- **[aethex.app](https://aethex.app)** - Mobile/Desktop Client
  - AeThex Passport mobile and desktop application
  - Native experience management
  - Cross-platform identity and inventory access
  - Push notifications and real-time features

- **[aethex.space](https://aethex.space)** - Community Hub
  - Community spaces and forums
  - Social features and connections
  - User-generated content and discussions
  - Events and meetups

- **[aethex.locker](https://aethex.locker)** - Asset Management
  - Digital asset storage and inventory
  - Cross-game item management
  - Secure wallet and vault services
  - Trading and marketplace integration

### Utility & Services
- **[aethex.me](https://aethex.me)** - Personal Profiles
  - User profile pages (user.aethex.me)
  - Public portfolios and achievements
  - Social presence and identity
  - Customizable profile pages

- **[aethex.sbs](https://aethex.sbs)** - Reserved Domain
  - Purpose TBD - future expansion

- **[aethex.site](https://aethex.site)** - Redirect Service
  - Potential redirect to aethex.net
  - URL shortening or campaign landing pages

- **[waitlist.aethex](https://waitlist.aethex)** - Centralized Waitlist
  - Single waitlist for all AeThex products
  - Early access registration
  - Product launch notifications
  - Priority access management

### Monitoring & Status
- **[status.aethex.net](https://status.aethex.net)** - System Status
  - Real-time infrastructure monitoring
  - Uptime reports and service health
  - Incident history and postmortems
  - Maintenance schedules
  - Subscribe to alerts

## 🎯 User Journeys

### For Players
1. Land on **aethex.net**
2. Create AeThex Passport
3. Browse **Experiences**
4. Download **aethex.app** for mobile/desktop
5. Play games with persistent progress across platforms

### For Creators
1. Discover via **aethex.net**
2. Explore **Creators** page
3. Visit **aethex.studio** for creation tools
4. Publish to **aethex.space** community
5. Monetize through marketplace

### For Developers
1. Find **aethex.net** via search
2. Click "Build" path selector
3. Redirected to **aethex.cloud** for APIs
4. Access docs at **aethex.dev**
5. Implementation guides at **aethex.tech**

### For Community Members
1. Explore ecosystem on **aethex.net**
2. Get AeThex Passport
3. Join discussions on **aethex.space**
4. Visit **aethex.foundation** to vote on governance
5. Create profile at **aethex.me**

### For Investors/Press
1. Learn about vision on **aethex.net**
2. Visit **aethex.info** for comprehensive information
3. Access investor relations, press kit, media resources
4. Contact partnerships team

### For Job Seekers
1. Discover AeThex via **aethex.net**
2. Visit **aethex.info** for careers section
3. Browse open positions
4. Apply through careers portal

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v6
- **Language**: TypeScript
- **Deployment**: [TBD - Vercel/Netlify/Cloudflare Pages]

## 🚀 Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── PathSelector.tsx
│   ├── FeaturedExperiences.tsx
│   ├── EcosystemMap.tsx
│   ├── PassportCTA.tsx
│   └── FoundationPreview.tsx
├── pages/              # Route pages
│   ├── Home.tsx
│   ├── Experiences.tsx
│   ├── Ecosystem.tsx
│   ├── Passport.tsx
│   ├── Foundation.tsx
│   ├── Creators.tsx
│   └── Status.tsx
├── App.tsx            # Router configuration
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎨 Design Philosophy

**Not Stripe. Not AWS. Think:**
- Apple.com - Beautiful, approachable
- Unity.com - Showcases creations
- Roblox.com - Accessible to all ages
- Epic Games - Portfolio + ecosystem vision

**Visual Language:**
- "Architectural Sci-Fi" aesthetic
- Inviting, not intimidating
- Dark theme with gradients
- "Order from Chaos" philosophy
- Interactive ecosystem visualization

## 🔗 Cross-Domain Navigation

The site intelligently routes users:
- Technical users → **aethex.cloud**
- Governance → **aethex.foundation**
- Deep lore → **aethex.info**
- Careers → **careers.aethex.biz**
- Corporate → **corp.aethex.biz**

## 📄 License

[TBD - Add license information]

## 🤝 Contributing

Want to contribute? Check out **[contribute.aethex.biz](https://contribute.aethex.biz)**

---

**Made with ❤️ for the multiverse**
