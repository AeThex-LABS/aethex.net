#!/usr/bin/env node

/**
 * Lore Language Compiler (MVP)
 * Transpiles .lore files to JavaScript
 */

class LoreCompiler {
  constructor() {
    this.worlds = new Map();
    this.artifacts = new Map();
    this.chapters = new Map();
    this.atmosphere = { mood: 'neutral', tempo: 'normal' };
    this.output = [];
    this.indent = 0;
  }

  compile(loreCode) {
    this.output = [];
    this.indent = 0;
    
    // Add runtime helper at the top
    this.addRuntime();
    
    const lines = loreCode.split('\n');
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i].trim();
      
      if (!line || line.startsWith('#')) {
        i++;
        continue;
      }
      
      if (line.startsWith('world ')) {
        i = this.compileWorld(lines, i);
      } else if (line.startsWith('artifact ')) {
        i = this.compileArtifact(lines, i);
      } else if (line.startsWith('chapter ')) {
        i = this.compileChapter(lines, i);
      } else if (line.startsWith('sync ')) {
        i = this.compileSync(lines, i);
      } else if (line.startsWith('atmosphere ')) {
        i = this.compileAtmosphere(lines, i);
      } else if (line.startsWith('when ')) {
        i = this.compileWhen(lines, i);
      } else if (line.startsWith('signal ')) {
        i = this.compileSignal(lines, i);
      } else if (line.startsWith('quest ')) {
        i = this.compileQuest(lines, i);
      } else if (line.startsWith('bridge ')) {
        i = this.compileBridge(lines, i);
      } else {
        // Pass through as-is with light transformation
        this.emit(this.transformExpression(line));
        i++;
      }
    }
    
    return this.output.join('\n');
  }

  addRuntime() {
    this.emit(`// Lore Runtime Environment`);
    this.emit(`const Lore = {`);
    this.indent++;
    this.emit(`worlds: new Map(),`);
    this.emit(`artifacts: new Map(),`);
    this.emit(`atmosphere: { mood: 'neutral', tempo: 'normal' },`);
    this.emit(`history: [],`);
    this.emit(``);
    this.emit(`whisper(message) {`);
    this.indent++;
    this.emit(`console.log(\`🌌 \${message}\`);`);
    this.indent--;
    this.emit(`},`);
    this.emit(``);
    this.emit(`broadcast(message) {`);
    this.indent++;
    this.emit(`console.log(\`📡 BROADCAST: \${message}\`);`);
    this.indent--;
    this.emit(`},`);
    this.emit(``);
    this.emit(`reveal(content) {`);
    this.indent++;
    this.emit(`console.log(\`✨ REVEALED: \${content}\`);`);
    this.indent--;
    this.emit(`},`);
    this.emit(``);
    this.emit(`async sync(artifact, platforms) {`);
    this.indent++;
    this.emit(`console.log(\`🔄 Syncing \${artifact} across [\${platforms.join(', ')}]\`);`);
    this.emit(`// Simulate cross-platform sync`);
    this.emit(`await new Promise(resolve => setTimeout(resolve, 100));`);
    this.emit(`return { synced: true, platforms };`);
    this.indent--;
    this.emit(`},`);
    this.emit(``);
    this.emit(`setMood(mood) {`);
    this.indent++;
    this.emit(`this.atmosphere.mood = mood;`);
    this.emit(`console.log(\`🎭 Atmosphere shifted to: \${mood}\`);`);
    this.indent--;
    this.emit(`},`);
    this.emit(``);
    this.emit(`recordHistory(event) {`);
    this.indent++;
    this.emit(`this.history.push({ ...event, timestamp: Date.now() });`);
    this.indent--;
    this.emit(`}`);
    this.indent--;
    this.emit(`};`);
    this.emit(``);
  }

  compileWorld(lines, start) {
    const match = lines[start].match(/world\s+(\w+)\s*{/);
    if (!match) return start + 1;
    
    const worldName = match[1];
    this.emit(`// World: ${worldName}`);
    this.emit(`const ${worldName} = {`);
    this.indent++;
    
    let i = start + 1;
    while (i < lines.length && !lines[i].trim().startsWith('}')) {
      const line = lines[i].trim();
      if (line && !line.startsWith('#')) {
        const propMatch = line.match(/(\w+):\s*(.+)/);
        if (propMatch) {
          const [, key, value] = propMatch;
          this.emit(`${key}: ${this.transformValue(value.replace(',', ''))},`);
        }
      }
      i++;
    }
    
    this.indent--;
    this.emit(`};`);
    this.emit(`Lore.worlds.set('${worldName}', ${worldName});`);
    this.emit(``);
    
    return i + 1;
  }

  compileArtifact(lines, start) {
    const match = lines[start].match(/artifact\s+(\w+)\s*{/);
    if (!match) return start + 1;
    
    const artifactName = match[1];
    this.emit(`// Artifact: ${artifactName}`);
    this.emit(`const ${artifactName} = {`);
    this.indent++;
    
    let i = start + 1;
    while (i < lines.length && !lines[i].trim().startsWith('}')) {
      const line = lines[i].trim();
      if (line && !line.startsWith('#')) {
        const propMatch = line.match(/(\w+):\s*(.+)/);
        if (propMatch) {
          const [, key, value] = propMatch;
          this.emit(`${key}: ${this.transformValue(value.replace(',', ''))},`);
        }
      }
      i++;
    }
    
    this.indent--;
    this.emit(`};`);
    this.emit(`Lore.artifacts.set('${artifactName}', ${artifactName});`);
    this.emit(``);
    
    return i + 1;
  }

  compileChapter(lines, start) {
    const match = lines[start].match(/chapter\s+(\w+)\s*\(([^)]*)\)/);
    if (!match) return start + 1;
    
    const [, chapterName, params] = match;
    this.emit(`// Chapter: ${chapterName}`);
    this.emit(`async function ${chapterName}(${params}) {`);
    this.indent++;
    
    let i = start + 1;
    let inBlock = true;
    
    // Check for mood declaration
    if (lines[i].trim().startsWith('mood:')) {
      const mood = lines[i].trim().match(/mood:\s*(\w+)/)[1];
      this.emit(`Lore.setMood('${mood}');`);
      i++;
    }
    
    while (i < lines.length && inBlock) {
      const line = lines[i].trim();
      
      if (line === '}') {
        inBlock = false;
      } else if (line && !line.startsWith('#')) {
        if (line.startsWith('when ')) {
          i = this.compileWhen(lines, i);
          continue;
        } else if (line.startsWith('sync ')) {
          const syncMatch = line.match(/sync\s+(.+?)\s+across\s+(.+)/);
          if (syncMatch) {
            const [, artifact, platforms] = syncMatch;
            this.emit(`await Lore.sync('${artifact}', ${platforms});`);
          }
        } else if (line.startsWith('whisper ')) {
          const msg = line.match(/whisper\s+"(.+?)"/)[1];
          this.emit(`Lore.whisper(\`${msg}\`);`);
        } else if (line.startsWith('reveal ')) {
          const content = line.match(/reveal\s+(.+)/)[1];
          this.emit(`Lore.reveal(${content});`);
        } else if (line.startsWith('broadcast ')) {
          const msg = line.match(/broadcast\s+"(.+?)"/)[1];
          this.emit(`Lore.broadcast(\`${msg}\`);`);
        } else if (line.startsWith('return ')) {
          const value = line.match(/return\s+(.+)/)[1];
          this.emit(`return ${this.transformExpression(value)};`);
        } else {
          this.emit(this.transformExpression(line));
        }
      }
      i++;
    }
    
    this.indent--;
    this.emit(`}`);
    this.emit(``);
    
    return i;
  }

  compileSync(lines, start) {
    const match = lines[start].match(/sync\s+(\w+)\s*{/);
    if (!match) return start + 1;
    
    const syncName = match[1];
    this.emit(`// Sync Protocol: ${syncName}`);
    this.emit(`const ${syncName}_sync = {`);
    this.indent++;
    
    let i = start + 1;
    while (i < lines.length && !lines[i].trim().startsWith('}')) {
      const line = lines[i].trim();
      if (line && !line.startsWith('#')) {
        const propMatch = line.match(/(\w+):\s*(.+)/);
        if (propMatch) {
          const [, key, value] = propMatch;
          this.emit(`${key}: ${this.transformValue(value.replace(',', ''))},`);
        }
      }
      i++;
    }
    
    this.indent--;
    this.emit(`};`);
    this.emit(``);
    
    return i + 1;
  }

  compileAtmosphere(lines, start) {
    this.emit(`// Atmosphere Block`);
    this.emit(`{`);
    this.indent++;
    
    let i = start + 1;
    let atmosphere = {};
    
    while (i < lines.length && !lines[i].trim().startsWith('}') && !lines[i].trim().startsWith('chapter')) {
      const line = lines[i].trim();
      if (line && !line.startsWith('#')) {
        const propMatch = line.match(/(\w+):\s*(.+)/);
        if (propMatch) {
          const [, key, value] = propMatch;
          atmosphere[key] = value;
          this.emit(`Lore.atmosphere.${key} = '${value.replace(',', '')}';`);
        }
      }
      i++;
    }
    
    // Continue with nested chapter if present
    if (lines[i].trim().startsWith('chapter')) {
      i = this.compileChapter(lines, i);
    }
    
    this.indent--;
    this.emit(`}`);
    this.emit(``);
    
    return i;
  }

  compileWhen(lines, start) {
    const match = lines[start].match(/when\s+(.+?)\s*{/);
    if (!match) return start + 1;
    
    const condition = this.transformExpression(match[1]);
    this.emit(`if (${condition}) {`);
    this.indent++;
    
    let i = start + 1;
    let depth = 1;
    
    while (i < lines.length && depth > 0) {
      const line = lines[i].trim();
      
      if (line.includes('{')) depth++;
      if (line === '}') depth--;
      
      if (depth > 0 && line && !line.startsWith('#')) {
        if (line.startsWith('sync ')) {
          const syncMatch = line.match(/sync\s+(.+?)\s+across\s+(.+)/);
          if (syncMatch) {
            const [, artifact, platforms] = syncMatch;
            this.emit(`await Lore.sync('${artifact}', ${platforms});`);
          }
        } else if (line.startsWith('whisper ')) {
          const msg = line.match(/whisper\s+"(.+?)"/)[1];
          this.emit(`Lore.whisper(\`${msg}\`);`);
        } else if (line.startsWith('reveal ')) {
          const content = line.match(/reveal\s+(.+)/)[1];
          this.emit(`Lore.reveal(${content});`);
        } else if (line.startsWith('trigger ')) {
          const event = line.match(/trigger\s+(.+)/)[1];
          this.emit(`Lore.recordHistory({ type: 'trigger', event: '${event}' });`);
        } else if (line !== '}') {
          this.emit(this.transformExpression(line));
        }
      }
      i++;
    }
    
    this.indent--;
    this.emit(`}`);
    
    return i;
  }

  compileSignal(lines, start) {
    const match = lines[start].match(/signal\s+(.+?)\s*{/);
    if (!match) return start + 1;
    
    const condition = this.transformExpression(match[1]);
    this.emit(`// Signal Listener`);
    this.emit(`setInterval(() => {`);
    this.indent++;
    this.emit(`if (${condition}) {`);
    this.indent++;
    
    let i = start + 1;
    while (i < lines.length && !lines[i].trim().startsWith('}')) {
      const line = lines[i].trim();
      if (line && !line.startsWith('#')) {
        this.emit(this.transformExpression(line));
      }
      i++;
    }
    
    this.indent--;
    this.emit(`}`);
    this.indent--;
    this.emit(`}, 1000);`);
    this.emit(``);
    
    return i + 1;
  }

  compileQuest(lines, start) {
    const match = lines[start].match(/quest\s+(\w+)\s*{/);
    if (!match) return start + 1;
    
    const questName = match[1];
    this.emit(`// Quest: ${questName}`);
    this.emit(`async function ${questName}() {`);
    this.indent++;
    this.emit(`console.log('⚔️ Quest Started: ${questName}');`);
    
    let i = start + 1;
    while (i < lines.length && !lines[i].trim().startsWith('}')) {
      const line = lines[i].trim();
      if (line.startsWith('stage ')) {
        const stageName = line.match(/stage\s+(\w+)/)[1];
        this.emit(`console.log('📍 Stage: ${stageName}');`);
      } else if (line && !line.startsWith('#')) {
        this.emit(this.transformExpression(line));
      }
      i++;
    }
    
    this.emit(`console.log('✅ Quest Complete: ${questName}');`);
    this.indent--;
    this.emit(`}`);
    this.emit(``);
    
    return i + 1;
  }

  compileBridge(lines, start) {
    const match = lines[start].match(/bridge\s+(\w+)\s*{/);
    if (!match) return start + 1;
    
    const bridgeName = match[1];
    this.emit(`// Bridge: ${bridgeName}`);
    this.emit(`const ${bridgeName}_bridge = {`);
    this.indent++;
    
    let i = start + 1;
    while (i < lines.length && !lines[i].trim().startsWith('}')) {
      const line = lines[i].trim();
      if (line.startsWith('chapter ')) {
        i = this.compileChapter(lines, i);
        continue;
      } else if (line && !line.startsWith('#')) {
        const propMatch = line.match(/(\w+):\s*(.+)/);
        if (propMatch) {
          const [, key, value] = propMatch;
          this.emit(`${key}: ${this.transformValue(value.replace(',', ''))},`);
        }
      }
      i++;
    }
    
    this.indent--;
    this.emit(`};`);
    this.emit(``);
    
    return i + 1;
  }

  transformExpression(expr) {
    return expr
      .replace(/whisper\s+"(.+?)"/, 'Lore.whisper(`$1`)')
      .replace(/broadcast\s+"(.+?)"/, 'Lore.broadcast(`$1`)')
      .replace(/reveal\s+(.+)/, 'Lore.reveal($1)')
      .replace(/\$\{(.+?)\}/g, '${$1}'); // Preserve template literals
  }

  transformValue(value) {
    value = value.trim();
    
    // Handle arrays
    if (value.startsWith('[')) {
      return value;
    }
    
    // Handle objects
    if (value.startsWith('{')) {
      return value;
    }
    
    // Handle numbers
    if (!isNaN(value)) {
      return value;
    }
    
    // Handle booleans
    if (value === 'true' || value === 'false') {
      return value;
    }
    
    // Handle strings
    if (value.startsWith('"') || value.startsWith("'")) {
      return value;
    }
    
    // Default to string
    return `"${value}"`;
  }

  emit(code) {
    const indentation = '  '.repeat(this.indent);
    this.output.push(indentation + code);
  }
}

// CLI Interface
if (require.main === module) {
  const fs = require('fs');
  const path = require('path');
  
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: node lore-compiler.js <input.lore> [output.js]');
    process.exit(1);
  }
  
  const inputFile = args[0];
  const outputFile = args[1] || inputFile.replace('.lore', '.js');
  
  try {
    const loreCode = fs.readFileSync(inputFile, 'utf-8');
    const compiler = new LoreCompiler();
    const jsCode = compiler.compile(loreCode);
    
    fs.writeFileSync(outputFile, jsCode);
    console.log(`✨ Compiled ${inputFile} → ${outputFile}`);
  } catch (error) {
    console.error('🌌 Reality Fracture:', error.message);
    process.exit(1);
  }
}

module.exports = LoreCompiler;
