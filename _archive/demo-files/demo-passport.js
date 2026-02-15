// Lore Runtime Environment
const Lore = {
  worlds: new Map(),
  artifacts: new Map(),
  atmosphere: { mood: 'neutral', tempo: 'normal' },
  history: [],
  
  whisper(message) {
    console.log(`🌌 ${message}`);
  },
  
  broadcast(message) {
    console.log(`📡 BROADCAST: ${message}`);
  },
  
  reveal(content) {
    console.log(`✨ REVEALED: ${content}`);
  },
  
  async sync(artifact, platforms) {
    console.log(`🔄 Syncing ${artifact} across [${platforms.join(', ')}]`);
    await new Promise(resolve => setTimeout(resolve, 100));
    return { synced: true, platforms };
  },
  
  setMood(mood) {
    this.atmosphere.mood = mood;
    console.log(`🎭 Atmosphere shifted to: ${mood}`);
  },
  
  recordHistory(event) {
    this.history.push({ ...event, timestamp: Date.now() });
  }
};

// World: AeThex_Passport
const AeThex_Passport = {
  realm: "identity_layer",
  mood: "secure",
  founded: 2017,
};
Lore.worlds.set('AeThex_Passport', AeThex_Passport);

// Artifact: universal_identity
const universal_identity = {
  type: "passport",
  cross_platform: true,
  memory: {
    username: "MrPiglr",
    worlds_visited: 7,
    achievements: ["rdc_veteran", "hide_seek_creator", "trinity_founder"]
  }
};
Lore.artifacts.set('universal_identity', universal_identity);

// Chapter: AuthenticatePlayer
async function AuthenticatePlayer(traveler, platform) {
  Lore.setMood('welcoming');
  
  if (traveler.attempts_login) {
    await Lore.sync('traveler.identity', ['roblox', 'unity', 'web']);
    
    if (traveler.verified) {
      Lore.whisper(`Identity confirmed across realities`);
      Lore.reveal(traveler.username);
      return { granted: true, key: 'portal_key_xyz' };
    } else {
      Lore.setMood('cautious');
      Lore.whisper(`Unknown traveler detected`);
      return { granted: false, key: 'visitor_pass' };
    }
  }
}

// Chapter: SyncAvatarCosmetics
async function SyncAvatarCosmetics(passport) {
  Lore.setMood('creative');
  
  if (passport.has_cosmetics) {
    await Lore.sync('passport.cosmetics', ['roblox', 'unity', 'web']);
    Lore.whisper(`Your style persists across worlds`);
    Lore.reveal("Synchronized appearance data");
  }
}

// Quest: OnboardNewPlayer
async function OnboardNewPlayer() {
  console.log('⚔️ Quest Started: OnboardNewPlayer\n');
  
  // Stage 1: Welcome
  console.log('📍 Stage: welcome');
  Lore.whisper('Welcome to AeThex, traveler');
  Lore.reveal('Choose your identity');
  console.log('');
  
  // Stage 2: Create Passport
  console.log('📍 Stage: create_passport');
  const player_passport = {
    type: "passport",
    cross_platform: true,
    username: "NewTraveler",
    created_at: Date.now()
  };
  Lore.artifacts.set('player_passport', player_passport);
  Lore.whisper('Your universal identity is ready');
  console.log('');
  
  // Stage 3: Tour
  console.log('📍 Stage: tour');
  Lore.whisper('Let me show you the connected worlds...');
  Lore.reveal('Roblox, Unity, Web - all one journey');
  console.log('');
  
  // Stage 4: Complete
  console.log('📍 Stage: complete');
  Lore.broadcast('A new architect joins the metaverse!');
  console.log('');
  
  console.log('✅ Quest Complete: OnboardNewPlayer\n');
}

// Demo execution
async function runDemo() {
  console.log('═══════════════════════════════════════');
  console.log('   AeThex Passport System Demo');
  console.log('   Powered by Lore Language');
  console.log('═══════════════════════════════════════\n');
  
  // Test 1: Authenticate verified player
  console.log('📋 Test 1: Authenticating verified player\n');
  const verifiedPlayer = {
    username: 'MrPiglr',
    attempts_login: true,
    verified: true
  };
  const result1 = await AuthenticatePlayer(verifiedPlayer, 'roblox');
  console.log('Result:', result1);
  console.log('\n---\n');
  
  // Test 2: Authenticate unknown player
  console.log('📋 Test 2: Authenticating unknown player\n');
  const unknownPlayer = {
    username: 'Stranger',
    attempts_login: true,
    verified: false
  };
  const result2 = await AuthenticatePlayer(unknownPlayer, 'unity');
  console.log('Result:', result2);
  console.log('\n---\n');
  
  // Test 3: Sync avatar cosmetics
  console.log('📋 Test 3: Syncing avatar cosmetics\n');
  const passport = {
    has_cosmetics: true,
    cosmetics: ['cyberpunk_jacket', 'neon_visor', 'architect_badge']
  };
  await SyncAvatarCosmetics(passport);
  console.log('\n---\n');
  
  // Test 4: Onboard new player (full quest)
  console.log('📋 Test 4: Full onboarding quest\n');
  await OnboardNewPlayer();
  console.log('\n---\n');
  
  // Show final state
  console.log('📊 Final System State:\n');
  console.log('Worlds loaded:', Array.from(Lore.worlds.keys()));
  console.log('Artifacts created:', Array.from(Lore.artifacts.keys()));
  console.log('Current atmosphere:', Lore.atmosphere);
  console.log('History events:', Lore.history.length);
  
  console.log('\n═══════════════════════════════════════');
  console.log('   Demo Complete');
  console.log('═══════════════════════════════════════');
}

// Run the demo
runDemo().catch(console.error);
