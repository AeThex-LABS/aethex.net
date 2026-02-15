# AeThex Global Developer Directory

An immersive 3D interactive Earth visualization displaying AeThex developers as glowing nodes across the globe, with division-specific color coding and detailed developer profiles accessible through node interaction.

## 🌍 Features

- **3D Earth Globe**: Realistic Earth rendering with NASA Blue Marble texture
- **Interactive Developer Nodes**: Click on any developer location to view their profile
- **Division Filtering**: Filter developers by their organizational division
- **Real-time Updates**: Changes to the developer database are reflected instantly
- **Project Connections**: Visualize collaboration with arcs between developers working on the same projects
- **Time Zone Overlay**: See local times for each developer location
- **Technical Annotations**: Measurement lines and data overlays showing globe metrics

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- A Supabase account and project

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your Supabase credentials in `.env`:
   ```
   VITE_SUPABASE_URL=your-project-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

4. Set up the database schema (see [SUPABASE.md](./SUPABASE.md) for details)

5. Run the development server:
   ```bash
   npm run dev
   ```

## 📦 Tech Stack

- **React 19** with TypeScript
- **Three.js** & **three-globe** for 3D visualization
- **Supabase** for database and real-time updates
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **Phosphor Icons** for UI icons

## 🗄️ Database

This project uses Supabase as the backend database. See [SUPABASE.md](./SUPABASE.md) for detailed setup instructions and API documentation.

## 🎨 Design

The app features a technical blueprint aesthetic with:
- Monochromatic wireframe palette
- Inter font family for UI
- JetBrains Mono for technical elements
- Division-specific accent colors
- Minimal, purposeful animations

## 📄 License

The Spark Template files and resources from GitHub are licensed under the terms of the MIT license, Copyright GitHub, Inc.
