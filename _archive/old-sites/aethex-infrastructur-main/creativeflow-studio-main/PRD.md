# Planning Guide

AeThex Global Developer Directory - An immersive 3D interactive Earth visualization displaying AeThex developers as glowing nodes across the globe, with division-specific color coding and detailed developer profiles accessible through node interaction.

**Experience Qualities**:
1. **Futuristic** - Creates a cutting-edge tech company vibe with glowing nodes, animated connections, and a sci-fi aesthetic reminiscent of mission control centers
2. **Interactive** - Users can rotate the 3D Earth, zoom in/out, click nodes to reveal developer details, and watch automated rotation showcasing global reach
3. **Organized** - Clear visual hierarchy with color-coded divisions, structured information panels, and intuitive navigation between developer profiles

**Complexity Level**: Complex Application (advanced functionality, likely with multiple views)
The application requires 3D rendering with Three.js, interactive camera controls, dynamic node generation, state management for selected developers, and animated transitions between views.

## Essential Features

### 3D Earth Visualization
- **Functionality**: Renders a photorealistic 3D globe using three-globe library (built on Three.js) with NASA Blue Marble texture, topography bump mapping, atmospheric glow, and smooth rotation animation
- **Purpose**: Creates an immersive, memorable interface that showcases AeThex's global developer network in a visually striking way using high-quality, realistic Earth imagery
- **Trigger**: Loads automatically on app launch
- **Progression**: Earth renders with textures → Atmosphere appears → Developer nodes populate → Continuous auto-rotation → User can drag and rotate → Nodes pulse gently
- **Success criteria**: Smooth 60fps animation, responsive rotation controls, realistic Earth appearance with geography visible, nodes remain properly positioned on sphere surface

### Developer Nodes
- **Functionality**: Glowing 3D spheres positioned at geographic coordinates, color-coded by division (Purple/Yellow/Green/Blue/Red/Cyan/Purple for Staff/Labs/GameForge/Corp/Foundation/Dev-Link/Nexus)
- **Purpose**: Visual representation of each developer's location and division affiliation at a glance
- **Trigger**: Appear after Earth loads with cascade animation
- **Progression**: Node appears → Pulses with division color → User hovers (node scales up + glow intensifies) → Click reveals info panel
- **Success criteria**: All nodes visible and clickable, colors match division spec, hover states are responsive

### Developer Detail Panel
- **Functionality**: Slide-in panel displaying developer avatar, name, role, division, location, bio, skills, and current projects
- **Purpose**: Provides comprehensive information about each team member without leaving the 3D view
- **Trigger**: User clicks a developer node on the globe
- **Progression**: Node clicked → Camera smoothly moves to focus on node → Panel slides in from right → User views details → Close button or click elsewhere dismisses panel
- **Success criteria**: Panel displays all developer data, smooth slide animations, closes properly, camera returns to original position

### Division Filter
- **Functionality**: Toggle buttons for each AeThex division that show/hide corresponding nodes on the globe
- **Purpose**: Allows users to focus on specific divisions or view the entire organization
- **Trigger**: User clicks division filter button
- **Progression**: User clicks division → Matching nodes fade in/out → Active filters highlighted → "All" button resets view
- **Success criteria**: Instant filter response, smooth fade transitions, filter states persist during rotation

### Search Functionality
- **Functionality**: Search bar that filters developers by name, role, division, location, or skills
- **Purpose**: Quick access to specific team members without manually exploring the globe
- **Trigger**: User types in search input
- **Progression**: User types query → Matching nodes highlight and non-matching fade → Clear search resets → Click result focuses camera on that node
- **Success criteria**: Real-time search results, highlights correct nodes, clears properly

### Technical Measurement Lines & Annotations
- **Functionality**: Dashed measurement lines extending from the globe in all axes with technical callouts showing real-time data (rotation, tilt, active nodes, coordinates)
- **Purpose**: Enhances the technical blueprint aesthetic and provides precise spatial reference data
- **Trigger**: Displays automatically when globe renders
- **Progression**: Globe loads → Measurement lines appear as dashed guides → Annotations update dynamically as globe rotates → Shows radius, equator, poles, prime meridian, rotation angle, tilt angle, and active node count
- **Success criteria**: Lines remain fixed in space while globe rotates, annotations update smoothly, text remains readable and positioned correctly

### Project Connection Arcs
- **Functionality**: Animated arcs connecting developers who have worked on the same projects, creating a visual network of collaboration across the globe
- **Purpose**: Visualizes team collaboration patterns and project relationships, showing how developers across different locations and divisions work together
- **Trigger**: Displays automatically when globe renders with developer data
- **Progression**: Developers load → System analyzes shared projects → Arcs drawn between collaborators → Arcs animate with dashed pattern → Selected developer's arcs highlight in division color → Non-selected arcs remain subtle gray
- **Success criteria**: Arcs properly connect matching project collaborators, animations are smooth, highlighted arcs are clearly visible when developer is selected, arcs update when filters change

## Edge Case Handling

- **No JavaScript/WebGL Support** - Display fallback message with static team list and contact information
- **Low-Performance Devices** - Reduce particle effects, lower Earth texture resolution, disable shadows
- **Empty Developer Data** - Show placeholder nodes with "Coming Soon" message in detail panel
- **Overlapping Geographic Locations** - Offset nodes slightly in a circular pattern around the coordinate
- **Extremely Long Names/Bios** - Truncate with ellipsis and "Read More" expansion
- **Network Errors Loading Data** - Show retry button with error message, cache last successful load
- **Mobile Touch Controls** - Implement touch rotation, pinch-to-zoom, tap for selection with larger hit boxes

## Design Direction

The design should evoke a technical blueprint or architectural wireframe aesthetic - think engineering schematics meets modern UI design. Users should feel they're viewing a precision tool with a clean, line-based interface. The experience should balance technical clarity with visual elegance, using wireframe elements, grid patterns, and monochromatic styling with subtle accent colors to create a sophisticated, minimalist interface.

## Color Selection

Monochromatic wireframe palette with clean lines and minimal shading, featuring division-specific accent colors for nodes.

- **Primary Color**: Light Gray (#fafafa / oklch(0.98 0 0)) - Main background creating a blueprint/technical drawing aesthetic
- **Secondary Colors**: White (#ffffff / oklch(1 0 0)) for cards, Medium Gray (#737373 / oklch(0.55 0 0)) for muted elements
- **Accent Color**: Dark Gray (#262626 / oklch(0.15 0 0)) - Primary text and line work, wireframe edges
- **Foreground/Background Pairings**: 
  - Light Gray (#fafafa): Dark Gray text (#262626) - Ratio 15.8:1 ✓
  - White (#ffffff): Dark Gray text (#262626) - Ratio 16.1:1 ✓
  - Medium Gray borders (#737373): Visible on light backgrounds - Ratio 4.5:1 ✓
  - Division Colors: All use dark gray backgrounds for labels when needed - Ratios 4.5:1+ ✓

**Division Colors** (unchanged for node identification):
- Staff Purple: #7C3AED / oklch(0.58 0.24 285)
- Labs Yellow: #FBBF24 / oklch(0.82 0.15 85)
- GameForge Green: #22C55E / oklch(0.71 0.19 145)
- Corp Blue: #3B82F6 / oklch(0.62 0.21 250)
- Foundation Red: #EF4444 / oklch(0.62 0.23 25)
- Dev-Link Cyan: #06B6D4 / oklch(0.72 0.13 195)
- Nexus Purple: #A855F7 / oklch(0.64 0.24 295)

## Font Selection

Technical precision meets modern readability with a dual-typeface system - Inter for clean UI/body text, and JetBrains Mono for technical elements like coordinates and IDs.

- **Typographic Hierarchy**:
  - H1 (App Title "AeThex Global"): Inter Bold/36px/tight tracking (-0.02em)
  - H2 (Developer Name): Inter SemiBold/24px/normal tracking
  - H3 (Division Labels): Inter Medium/14px/wide tracking (0.05em) uppercase
  - Body (Bio Text): Inter Regular/16px/relaxed leading (1.6)
  - Technical (Coordinates): JetBrains Mono Regular/13px/tabular numbers
  - UI Labels: Inter Medium/14px/normal tracking
  - Button Text: Inter SemiBold/15px/normal tracking

## Animations

Animations should be subtle and purposeful, emphasizing precision and technical clarity rather than flashy effects - primarily focused on the wireframe Earth rotation, node pulsing, smooth transitions, and project connection arcs.

- **Earth Rotation**: Continuous slow rotation (0.1deg/sec) that pauses on user interaction, resumes after 3s idle
- **Node Pulse**: Gentle scale animation (1.0 → 1.1 → 1.0) every 3 seconds with subtle ring expansion
- **Node Hover**: Scale up to 1.5x over 200ms with ring expansion
- **Camera Focus**: Smooth damped movement (800ms) when selecting a node
- **Panel Transitions**: Slide-in from right (400ms ease-out), no fade effects - sharp transitions
- **Filter Transitions**: Nodes appear/disappear instantly when toggling division filters (no fade)
- **Arc Animations**: Dashed arcs animate continuously (3s cycle) showing flow of collaboration between developers
- **Arc Highlighting**: When developer selected, connected arcs brighten to division color while unrelated arcs remain subtle
- **Border Effects**: Corner brackets and technical annotation lines remain static
- **Minimal Motion**: Wireframe aesthetic prioritizes clarity over animation - most UI is static

## Component Selection

- **Components**:
  - **Canvas (three-globe/Three.js)**: Full-viewport 3D scene using three-globe library for realistic Earth rendering with NASA imagery
  - **Card**: Detail panel for developer information (slide-in from right)
  - **Input**: Search bar with icon and clear button
  - **Button**: Division filters, close buttons, navigation controls
  - **Badge**: Division labels, skill tags
  - **Avatar**: Developer profile images in detail panel
  - **ScrollArea**: For developer bio and project lists in detail panel
  - **Tooltip**: Quick info on node hover (name + division)
  - **Separator**: Dividing sections in detail panel

- **Customizations**:
  - **3D Globe Component**: Uses three-globe library with Blue Marble texture and topology bump mapping for realistic Earth appearance
  - **Developer Points**: Implemented using three-globe's pointsData API with division-colored markers at geographic coordinates
  - **Custom Camera Controls**: Drag-to-rotate with auto-rotation, smooth damping, and zoom controls
  - **Technical Overlays**: Custom measurement lines and annotations rendered outside the globe
  - **Stats Overlay**: Custom corner widget showing total devs, divisions, and countries

- **States**:
  - **Buttons**: Default (division color at 50% opacity), Hover (100% opacity + scale 1.05), Active (glowing border + filled background), Disabled (30% opacity)
  - **Nodes**: Default (gentle pulse), Hover (scaled + brighter glow + tooltip), Selected (constant bright glow + camera focus), Filtered Out (fade to transparent)
  - **Search Input**: Default (border-border), Focus (border-accent + subtle glow), Filled (border-muted), Error (border-destructive)
  - **Detail Panel**: Hidden (translateX(100%)), Visible (translateX(0)), Loading (skeleton shimmer)

- **Icon Selection**:
  - Globe (Earth) - App logo/header
  - User/UserCircle - Developer nodes/avatars
  - Search - Search functionality
  - MapPin - Location indicators
  - Filter/Funnel - Division filters
  - X/Close - Dismiss panel
  - ZoomIn/ZoomOut - Camera controls
  - Rotate3D - Rotation hint/control
  - Building - Division headquarters markers

- **Spacing**:
  - Container padding: px-6 py-8
  - Panel padding: p-6
  - Section gaps: gap-6
  - Element spacing: space-y-4
  - Card margins: mb-4
  - Button groups: gap-2
  - Icon-text gap: gap-2

- **Mobile**:
  - Earth takes full viewport with touch rotation
  - Detail panel becomes bottom sheet (slides up from bottom, max-height 70vh)
  - Division filters collapse into horizontal scrollable pills
  - Search bar moves to sticky top bar
  - Stats overlay repositions to top-left corner
  - Reduce Earth geometry complexity (lower polygon count)
  - Increase node touch targets to 44x44px minimum
  - Camera controls: pinch-to-zoom, single-finger drag rotation
