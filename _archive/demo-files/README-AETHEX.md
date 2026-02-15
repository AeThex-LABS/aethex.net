# 🌐 AeThex Programming Language

**Write once. Build everywhere. Connect all realities.**

The universal programming language for cross-platform metaverse development, created by Anderson (MrPiglr), founder of AeThex.

## Quick Start

### Installation

```bash
# Clone or download the AeThex compiler
# No dependencies required - pure Node.js
```

### Your First AeThex Program

Create a file called `hello.aethex`:

```aethex
reality MyFirstReality {
    type: "learning"
    platforms: all
}

journey Greet(traveler) {
    platform: all
    notify "Hello, ${traveler}!"
    reveal "Welcome to AeThex"
}
```

### Compile & Run

```bash
# Compile AeThex to JavaScript
node aethex-compiler.js hello.aethex

# Run the output
node hello.js
```

## Language Features

### 🌍 Realities
Execution contexts for different platforms and environments

```aethex
reality AeThex {
    type: "metaverse"
    platforms: [roblox, uefn, vrchat, spatial, web]
    founded: 2017
}
```

### 🎫 Passports
Cross-platform identity and state management

```aethex
passport user_identity {
    type: universal
    cross_platform: true
    data: {
        username: "MrPiglr"
        worlds_visited: 7
    }
}
```

### 🚀 Journeys
Platform-aware functions with automatic cross-compilation

```aethex
journey ConnectUser(traveler) {
    platform: all
    
    when traveler.enters(reality) {
        sync traveler.passport across platforms
        notify "Welcome back"
    }
}
```

### 🔄 Sync Protocol
Built-in cross-platform state synchronization

```aethex
sync player_state {
    from: [roblox, uefn, web]
    to: nexus_engine
    preserve: [inventory, progress]
}
```

### 🎯 Workflows
Multi-stage processes for complex operations

```aethex
workflow BuildGame {
    stage compile {
        duration: 5_minutes
    }
    
    stage test {
        verify builds.successful
    }
    
    stage deploy {
        broadcast "Live across all platforms!"
    }
}
```

### 🌉 Bridges
Platform integrations with native context

```aethex
bridge discord {
    endpoint: "https://discord.com/api"
    
    journey announce(message) {
        post message to channel("general")
    }
}
```

## Example Projects

### AeThex Passport System
Universal identity authentication

```bash
# View the example
cat example-passport.aethex

# Compile and run
node aethex-compiler.js example-passport.aethex
node example-passport.js
```

Output:
```
🎮 Platform switched to: all
🔄 Syncing traveler.passport across [roblox, uefn, web]
🌐 Identity confirmed across realities
✨ REVEALED: MrPiglr
```

### GameForge 48-Hour Jam
Educational game development competition

```bash
# View the example
cat example-gameforge.aethex
```

## Built-in Runtime Functions

```javascript
AeThex.notify(message)       // User notification
AeThex.broadcast(message)    // System-wide announcement
AeThex.reveal(content)       // Content discovery
AeThex.sync(passport, platforms)  // Cross-platform sync
AeThex.setPlatform(platform) // Change target platform
AeThex.recordHistory(event)  // Event logging
```

## Philosophy

**Reality is Code**
- Infrastructure becomes worlds
- Functions become journeys
- Variables become passports

**Cross-Platform Native**
- Write once, deploy everywhere
- Built-in Roblox, UEFN, VRChat, Spatial, Web support
- Automatic platform adaptation

**Immersive by Design**
- Code reflects the experience
- Platform-aware execution
- Identity-first architecture

**Deploy Everywhere**
- Single codebase
- Multiple platforms
- Unified state

## Syntax at a Glance

```aethex
# Declare a reality
reality MyReality { type: "gaming", platforms: all }

# Create a passport (identity/state)
passport player { type: universal, level: 10 }

# Write a journey (function)
journey DoSomething(param) {
    platform: all
    notify "Starting..."
    return result
}

# Sync across platforms
sync data across [roblox, uefn, web]

# Conditional logic
when condition {
    reveal "Discovery!"
}

# Listen for signals
signal player_count > 100 {
    broadcast "Milestone reached!"
}

# Define a workflow
workflow MyMission {
    stage one { ... }
    stage two { ... }
}
```

## Transpilation

AeThex compiles to clean JavaScript (and eventually Lua, Blueprint, C#):

**AeThex:**
```aethex
journey Greet(name) {
    platform: all
    notify "Hello, ${name}!"
}
```

**JavaScript:**
```javascript
async function Greet(name) {
  AeThex.setPlatform('all');
  AeThex.notify(`Hello, ${name}!`);
}
```

## Use Cases

- 🎮 **GameForge IDE** - Cross-platform game development
- 🎓 **The Foundry** - Educational certification ($99/student)
- 🔐 **Passport System** - Universal identity
- 💼 **NEXUS** - Talent marketplace
- 🛡️ **Warden** - PII compliance
- 🔄 **State Sync** - Cross-platform data
- 📊 **Analytics** - Multi-platform tracking

## Why AeThex?

Traditional approach:
```javascript
// Write separately for each platform
robloxVersion.lua
uefnVersion.uasset  
webVersion.js
```

AeThex approach:
```aethex
// Write once
game.aethex

// Compiles to all platforms automatically
```

Perfect for developers who:
- Build cross-platform games
- Need universal identity systems
- Want state sync across platforms
- Create interconnected metaverse experiences
- Teach game development

## Compiler Architecture

```
.aethex files
    ↓
AeThex Compiler
    ↓
Platform-Specific Output
    ↓
Roblox (Lua) / UEFN (Blueprint) / Web (JS) / Unity (C#)
```

The compiler handles:
- Lexical analysis
- Platform-specific transpilation
- Runtime injection
- Cross-platform mapping
- Identity management
- State synchronization

## Current Status

**MVP Features ✅**
- ✅ Reality declarations
- ✅ Passport (identity/state)
- ✅ Journey (functions)
- ✅ Environment blocks
- ✅ Workflows
- ✅ Signals (events)
- ✅ Bridges (integrations)
- ✅ Sync protocols
- ✅ JavaScript transpilation

**Coming Soon 🚧**
- Lua output (Roblox)
- Blueprint output (UEFN)
- C# output (Unity/VRChat)
- GameForge IDE integration
- Real-time state sync
- Warden PII scanning
- VS Code extension
- Package manager

## File Extension

`.aethex` files

## Examples Directory

```
/examples
  ├── passport.aethex          # Universal identity
  ├── gameforge-jam.aethex     # Game jam system
  ├── foundry-cert.aethex      # Certification program
  ├── nexus-marketplace.aethex # Job marketplace
  ├── warden-scanner.aethex    # PII compliance
  └── discord-bot.aethex       # Community management
```

## AeThex Ecosystem

**Divisions:**
- 📚 **Foundation** - Education (501c3)
- 🎮 **GameForge** - Cross-platform IDE
- 💼 **NEXUS** - Talent marketplace
- 🔬 **LABS** - Research & development
- 🏢 **CORP** - Agency services
- 🎵 **ETHOS** - Music guild
- ⚖️ **AXIOM** - Governance

**Products:**
- **The Foundry** - $99 certification program
- **Passport** - Universal identity
- **Warden** - PII compliance scanner
- **NEXUS** - Job marketplace
- **GameForge** - Desktop IDE
- **Terminal** - Command center

## Philosophy in Practice

**Traditional Multi-Platform:**
```javascript
// Roblox
function spawn() { /* Lua code */ }

// UEFN
void Spawn() { /* C++ code */ }

// Web
function spawn() { /* JS code */ }
```

**AeThex Unified:**
```aethex
journey Spawn(player) {
    platform: all  # Compiles to all platforms
    create player.character
    deploy to current_platform
}
```

Same logic. One language. All platforms. 🌐

## Inspiration

Built for the next generation of metaverse architects. Inspired by:
- 11 years of Roblox development
- Ready Player One's OASIS vision
- Cross-platform state management needs
- The future of interconnected realities

## License

MIT - Build your realities freely

## Created By

**Anderson (MrPiglr)**
- Founder & CTO of AeThex
- 11 years Roblox development
- RDC panelist & Beta Tester
- Building the OS for the metaverse

---

**AeThex Language: Write once. Build everywhere. Connect all realities.** 🌐

*The universal language for metaverse development. Built on 8+ years of cross-platform infrastructure.*
