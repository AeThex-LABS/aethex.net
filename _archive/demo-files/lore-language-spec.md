# Lore Programming Language
## A Language for Transmedia Worldbuilding & Gaming Infrastructure

Lore is a domain-specific language that treats code as narrative, infrastructure as worlds, and execution as storytelling.

---

## Philosophy

- **Everything is a Story**: Functions are "chapters", variables are "artifacts", and state is "memory"
- **Cross-Reality Native**: Built-in concepts for multi-platform state sync
- **Atmospheric by Default**: Code reads like prose with emotional context
- **Show, Don't Tell**: Implicit behavior over explicit declarations

---

## Syntax Overview

### 1. World Declaration
Worlds are your execution contexts (like namespaces, but cooler).

```lore
world AeThex {
    realm: "metaverse"
    mood: ambient
    founded: 2017
}
```

### 2. Artifacts (Variables)
Artifacts persist across realities and carry metadata.

```lore
artifact identity {
    type: passport
    cross_platform: true
    memory: {
        username: "MrPiglr"
        worlds_visited: 7
    }
}
```

### 3. Chapters (Functions)
Chapters are narrative-driven functions with atmospheric context.

```lore
chapter ConnectPlayer(traveler) {
    mood: mysterious
    
    when traveler.enters(world) {
        sync traveler.identity across platforms
        whisper "Welcome back, ${traveler.username}"
        
        if traveler.first_visit {
            reveal origin_story
        }
    }
}
```

### 4. Sync Protocol (State Management)
Built-in cross-platform state synchronization.

```lore
sync player_state {
    from: [roblox, unity, web]
    to: nexus_engine
    
    preserve: [inventory, progress, achievements]
    resolve_conflicts: latest_timestamp
}
```

### 5. Atmosphere Blocks
Set emotional tone that affects execution behavior (logging, timing, UI hints).

```lore
atmosphere {
    mood: tense
    tempo: fast
    
    chapter EscapeSequence(player) {
        # Code here executes with urgency
        # Timeouts are shorter, errors are louder
    }
}
```

### 6. Lore Objects (Complex Types)
Rich, narrative data structures.

```lore
lore Corporation {
    name: string
    founded: timestamp
    mythology: story
    
    chapter tell_origin() {
        return this.mythology.beginning
    }
}

manifest AeThex_Corp as Corporation {
    name: "AeThex"
    founded: 2017
    mythology: story {
        beginning: "What started as a landscaping business..."
        present: "Building infrastructure for interconnected worlds..."
        future: "The OASIS becomes real..."
    }
}
```

### 7. Events & Signals
Narrative-driven event system.

```lore
when player.discovers(hidden_room) {
    trigger mystery_theme
    reveal lore_fragment("architect_notes")
    
    if player.has_artifact("decoder") {
        unlock secret_ending
    }
}

signal player_count > 1000 {
    atmosphere.shift_to: "epic"
    notify "The world awakens"
}
```

### 8. Memory Streams (Async/Observables)
Time-aware data flows.

```lore
memory_stream game_events {
    from: all_servers
    
    observe event {
        if event.type == "boss_defeated" {
            broadcast_to: all_players
            preserve: world_history
        }
    }
}
```

### 9. Reality Bridges (APIs/Integrations)
Connect different platforms with narrative context.

```lore
bridge discord {
    portal: "https://discord.com/api"
    authority: env.DISCORD_TOKEN
    
    chapter announce(message) {
        cast message to channel("general")
        mood: "casual"
    }
}
```

### 10. Quests (Workflows/Pipelines)

```lore
quest BuildMultiPlatformGame {
    stage planning {
        duration: 48_hours  # GameForge style!
        outcome: game_design_doc
    }
    
    stage development {
        parallel [
            build_roblox_version,
            build_unity_version,
            build_web_version
        ]
    }
    
    stage sync {
        with nexus_engine
        verify cross_platform_identity
    }
    
    stage launch {
        when all_versions.ready {
            atmosphere: triumphant
            broadcast "All in One: Live across realities"
        }
    }
}
```

---

## Advanced Features

### Temporal Operators
```lore
# Time-aware operations
artifact player_data {
    as_of: 2_hours_ago
    since: game_launch
    until: event("season_end")
}
```

### Emotional Type System
```lore
chapter critical_bug_fix() -> feeling(relieved) {
    # Return type hints at emotional outcome
    fix authentication_issue
    return "Finally working!"
}
```

### Cross-Reality Variables
```lore
artifact item {
    exists_in: [roblox, unity, discord, web]
    representation: {
        roblox: "Tool object",
        unity: "GameObject",
        discord: "role",
        web: "NFT metadata"
    }
}
```

### World History (Immutable Log)
```lore
history world_events {
    permanent: true
    
    record player_joined(player_id, timestamp)
    record item_crafted(item_id, crafter, timestamp)
    
    replay events since 2024-01-01 {
        # Reconstruct world state
    }
}
```

---

## Example: AeThex Passport System

```lore
world AeThex_Passport {
    realm: "identity_layer"
    mood: secure
    
    artifact universal_identity {
        type: passport
        cross_platform: true
    }
    
    chapter authenticate(user, platform) {
        when user.attempts_login {
            sync user.identity from nexus_engine
            
            if user.verified {
                grant access to platform
                whisper "Identity confirmed across realities"
            } else {
                atmosphere: cautious
                require additional_verification
            }
        }
    }
    
    bridge roblox {
        chapter sync_avatar(passport) {
            pull passport.cosmetics
            apply_to roblox_character
            preserve cross_platform_state
        }
    }
    
    bridge unity {
        chapter sync_progress(passport) {
            merge [passport.achievements, passport.inventory]
            resolve_conflicts: player_choice
        }
    }
}
```

---

## Example: GameForge Jam

```lore
quest GameForge_Jam {
    duration: 48_hours
    atmosphere: intense
    
    stage registration {
        when developer.registers {
            grant artifact("participant_badge")
            assign random_team
        }
    }
    
    stage development {
        countdown: 48_hours
        
        observe team.progress every 6_hours {
            if team.stuck {
                mood: supportive
                offer mentor_help
            }
        }
    }
    
    stage submission {
        deadline: strict
        
        when team.submits(game) {
            atmosphere: hopeful
            verify game.playable
            add_to showcase
        }
    }
    
    stage judging {
        parallel judge evaluations
        
        chapter calculate_winner() {
            aggregate scores
            atmosphere: triumphant
            announce winner
            reveal "Developer of Tomorrow award"
        }
    }
}
```

---

## Built-in Types

- `passport` - Cross-platform identity
- `world` - Execution realm
- `story` - Narrative structure
- `memory` - Persistent state
- `signal` - Event emitter
- `bridge` - Platform connector
- `quest` - Workflow
- `artifact` - Rich variable
- `mood` - Atmospheric enum
- `timeline` - Temporal sequence

---

## Standard Library

### World Management
- `sync across platforms`
- `preserve state`
- `resolve conflicts`

### Narrative
- `reveal lore_fragment`
- `trigger cutscene`
- `unlock achievement`

### Atmosphere
- `shift mood`
- `set tempo`
- `play theme`

### Time
- `as_of timestamp`
- `since event`
- `countdown duration`

---

## Philosophy in Practice

**Traditional Code:**
```javascript
async function loginUser(userId, platform) {
    const user = await db.users.findOne(userId);
    if (user.platforms.includes(platform)) {
        return { success: true, token: generateToken(user) };
    }
    return { success: false };
}
```

**Lore Code:**
```lore
chapter WelcomeTraveler(soul, destination) {
    mood: welcoming
    
    sync soul.identity from nexus_engine
    
    when soul.recognized_in(destination) {
        grant soul passage
        whisper "Your journey continues..."
        return portal_key
    } otherwise {
        atmosphere: mysterious
        reveal "You haven't been here before..."
        return visitor_pass
    }
}
```

---

## Compiler Features

- **Transpiles to:** JavaScript, TypeScript, Lua (for Roblox)
- **Runtime:** Node.js, Deno, Roblox, Unity (via bridge)
- **Type checking:** Emotional + structural
- **Cross-platform:** Built-in sync protocols
- **Immersive errors:** Narrative-styled error messages

Example error:
```
🌌 Reality Fracture in Chapter "ConnectPlayer"
   └─ The traveler's identity couldn't sync across platforms
   └─ Perhaps the Nexus Engine is dormant?
   └─ Hint: Check your authentication artifact
```

---

## File Extension
`.lore`

## Tagline
*"Code that tells a story across every reality."*

---

Built for worldbuilders, by a worldbuilder. 🌌
