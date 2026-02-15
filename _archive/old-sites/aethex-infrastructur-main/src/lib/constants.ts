import type { ArmConfig, Platform } from './types'

export const ARMS: ArmConfig[] = [
  {
    id: 'staff',
    name: 'Staff',
    color: 'oklch(0.62 0.24 286)',
    description: 'Core team and leadership'
  },
  {
    id: 'labs',
    name: 'Labs',
    color: 'oklch(0.80 0.15 85)',
    description: 'Innovation and R&D'
  },
  {
    id: 'gameforge',
    name: 'GameForge',
    color: 'oklch(0.65 0.20 145)',
    description: 'Cross-platform game development infrastructure'
  },
  {
    id: 'corp',
    name: 'Corp',
    color: 'oklch(0.60 0.20 250)',
    description: 'Business operations and partnerships'
  },
  {
    id: 'foundation',
    name: 'Foundation',
    color: 'oklch(0.62 0.24 25)',
    description: 'Identity and passport systems'
  },
  {
    id: 'devlink',
    name: 'Dev-Link',
    color: 'oklch(0.68 0.16 205)',
    description: 'Developer tools and integrations'
  },
  {
    id: 'nexus',
    name: 'Nexus',
    color: 'oklch(0.68 0.22 295)',
    description: 'Central coordination hub'
  }
]

export const INITIAL_PLATFORMS: Platform[] = [
  {
    id: 'web',
    type: 'web',
    name: 'Web',
    position: { x: 0.2, y: 0.3 },
    active: true,
    color: 'oklch(0.73 0.14 240)'
  },
  {
    id: 'mobile',
    type: 'mobile',
    name: 'Mobile',
    position: { x: 0.8, y: 0.3 },
    active: true,
    color: 'oklch(0.78 0.19 295)'
  },
  {
    id: 'console',
    type: 'console',
    name: 'Console',
    position: { x: 0.2, y: 0.7 },
    active: true,
    color: 'oklch(0.65 0.20 145)'
  },
  {
    id: 'pc',
    type: 'pc',
    name: 'PC',
    position: { x: 0.8, y: 0.7 },
    active: true,
    color: 'oklch(0.71 0.14 210)'
  }
]

export const CODE_EXAMPLES = {
  web: `import { AeThexSync } from '@aethex/sync'

const sync = new AeThexSync({
  platformId: 'web-client',
  syncInterval: 16
})

sync.onStateChange((state) => {
  updateGameState(state)
  renderFrame()
})

sync.setState({
  playerPosition: { x: 100, y: 200 },
  score: 1500,
  inventory: ['sword', 'shield']
})`,
  
  mobile: `import AeThexSync

let sync = AeThexSync(
  platformId: "mobile-client",
  syncInterval: 16
)

sync.onStateChange { state in
  self.updateGameState(state)
  self.renderFrame()
}

sync.setState(GameState(
  playerPosition: Point(x: 100, y: 200),
  score: 1500,
  inventory: ["sword", "shield"]
))`,
  
  console: `#include <aethex/sync.h>

AeThexSync sync("console-client", 16);

sync.onStateChange([](const GameState& state) {
  updateGameState(state);
  renderFrame();
});

GameState state;
state.playerPosition = {100, 200};
state.score = 1500;
state.inventory = {"sword", "shield"};

sync.setState(state);`,
  
  pc: `using AeThex.Sync;

var sync = new AeThexSync(
  platformId: "pc-client",
  syncInterval: 16
);

sync.OnStateChange += (state) => {
  UpdateGameState(state);
  RenderFrame();
};

sync.SetState(new GameState {
  PlayerPosition = new Vector2(100, 200),
  Score = 1500,
  Inventory = new[] { "sword", "shield" }
});`
}
