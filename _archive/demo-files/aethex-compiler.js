#!/usr/bin/env node

/**
 * AeThex Language Compiler (MVP)
 * Transpiles .aethex files to JavaScript
 */

class AeThexCompiler {
  constructor() {
    this.worlds = new Map();
    this.artifacts = new Map();
    this.chapters = new Map();
    this.atmosphere = { mood: 'neutral', tempo: 'normal' };
    this.output = [];
    this.indent = 0;
  }

  compile(aethexCode) {
    this.output = [];
    this.indent = 0;
    
    // Add runtime helper at the top
    this.addRuntime();
    
    const lines = aethexCode.split('\n');
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i].trim();
      
      if (!line || line.startsWith('#')) {
        i++;
        continue;
      }
      
      if (line.startsWith('reality ')) {
        i = this.compileReality(lines, i);
      } else if (line.startsWith('passport ')) {
        i = this.compilePassport(lines, i);
      } else if (line.startsWith('journey ')) {
        i = this.compileJourney(lines, i);
      } else if (line.startsWith('sync ')) {
        i = this.compileSync(lines, i);
      } else if (line.startsWith('environment ')) {
        i = this.compileEnvironment(lines, i);
      } else if (line.startsWith('when ')) {
        i = this.compileWhen(lines, i);
      } else if (line.startsWith('signal ')) {
        i = this.compileSignal(lines, i);
      } else if (line.startsWith('workflow ')) {
        i = this.compileWorkflow(lines, i);
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
    this.emit(`// AeThex Runtime Environment`);
    this.emit(`const AeThex = {`);
    this.indent++;
    this.emit(`realities: new Map(),`);
    this.emit(`passports: new Map(),`);
    this.emit(`environment: { platform: 'all', compliance: [] },`);
    this.emit(`history: [],`);
    this.emit(``);
    this.emit(`notify(message) {`);
    this.indent++;
    this.emit(`console.log(\`🌐 \${message}\`);`);
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
    this.emit(`async sync(passport, platforms) {`);
    this.indent++;
    this.emit(`console.log(\`🔄 Syncing \${passport} across [\${platforms.join(', ')}]\`);`);
    this.emit(`// Simulate cross-platform sync`);
    this.emit(`await new Promise(resolve => setTimeout(resolve, 100));`);
    this.emit(`return { synced: true, platforms };`);
    this.indent--;
    this.emit(`},`);
    this.emit(``);
    this.emit(`setPlatform(platform) {`);
    this.indent++;
    this.emit(`this.environment.platform = platform;`);
    this.emit(`console.log(\`🎮 Platform switched to: \${platform}\`);`);
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

  compileReality(lines, start) {
    const match = lines[start].match(/reality\s+(\w+)\s*{/);
    if (!match) return start + 1;
    
    const realityName = match[1];
    this.emit(`// Reality: ${realityName}`);
    this.emit(`const ${realityName} = {`);
    this.indent++;
    
    let i = start + 1;
    let depth = 1;
    
    while (i < lines.length && depth > 0) {
      const line = lines[i].trim();
      
      // Track block depth
      if (line.endsWith('{')) depth++;
      if (line === '}') {
        depth--;
        if (depth === 0) break;
        this.emit('}');
      } else if (line && !line.startsWith('#')) {
        const propMatch = line.match(/(\w+):\s*(.+)/);
        if (propMatch) {
          const [, key, value] = propMatch;
          const cleanValue = value.replace(/,\s*$/, '');
          
          // Handle inline objects
          if (cleanValue === '{') {
            this.emit(`${key}: {`);
            this.indent++;
          } else {
            this.emit(`${key}: ${this.transformValue(cleanValue)},`);
          }
        }
      }
      i++;
    }
    
    this.indent--;
    this.emit(`};`);
    this.emit(`AeThex.realities.set('${realityName}', ${realityName});`);
    this.emit(``);
    
    return i + 1;
  }

  compilePassport(lines, start) {
    const match = lines[start].match(/passport\s+(\w+)\s*{/);
    if (!match) return start + 1;
    
    const passportName = match[1];
    this.emit(`// Passport: ${passportName}`);
    this.emit(`const ${passportName} = {`);
    this.indent++;
    
    let i = start + 1;
    let depth = 1;
    
    while (i < lines.length && depth > 0) {
      const line = lines[i].trim();
      
      // Track block depth
      if (line.endsWith('{')) depth++;
      if (line === '}') {
        depth--;
        if (depth === 0) break;
        this.emit('}');
      } else if (line && !line.startsWith('#')) {
        const propMatch = line.match(/(\w+):\s*(.+)/);
        if (propMatch) {
          const [, key, value] = propMatch;
          const cleanValue = value.replace(/,\s*$/, '');
          
          // Handle inline objects
          if (cleanValue === '{') {
            this.emit(`${key}: {`);
            this.indent++;
          } else {
            this.emit(`${key}: ${this.transformValue(cleanValue)},`);
          }
        }
      }
      i++;
    }
    
    this.indent--;
    this.emit(`};`);
    this.emit(`AeThex.passports.set('${passportName}', ${passportName});`);
    this.emit(``);
    
    return i + 1;
  }

  compileJourney(lines, start) {
    const match = lines[start].match(/journey\s+(\w+)\s*\(([^)]*)\)/);
    if (!match) return start + 1;
    
    const [, journeyName, params] = match;
    this.emit(`// Journey: ${journeyName}`);
    this.emit(`async function ${journeyName}(${params}) {`);
    this.indent++;
    
    let i = start + 1;
    let blockDepth = 1; // Track curly brace depth
    
    // Check for platform declaration
    if (i < lines.length && lines[i].trim().startsWith('platform:')) {
      const platformMatch = lines[i].trim().match(/platform:\s*(\w+)/);
      if (platformMatch) {
        this.emit(`AeThex.setPlatform('${platformMatch[1]}');`);
      }
      i++;
    }
    
    while (i < lines.length && blockDepth > 0) {
      const line = lines[i].trim();
      
      // Track block depth
      if (line.endsWith('{') && !line.startsWith('when ') && !line.startsWith('if ')) blockDepth++;
      if (line === '}') {
        blockDepth--;
        if (blockDepth === 0) break; // End of journey
        this.indent--;
        this.emit('}');
        i++;
        continue;
      }
      
      if (line && !line.startsWith('#')) {
        if (line.startsWith('when ')) {
          i = this.compileWhen(lines, i);
          continue;
        } else if (line.startsWith('if ')) {
          // Handle regular if statements
          const condMatch = line.match(/if\s+(.+?)\s*{/);
          if (condMatch) {
            this.emit(`if (${condMatch[1]}) {`);
            this.indent++;
          }
        } else if (line === 'otherwise {' || line === '} otherwise {') {
          if (line.startsWith('}')) {
            this.indent--;
            this.emit('}');
          }
          this.emit('else {');
          this.indent++;
        } else if (line.startsWith('sync ')) {
          const syncMatch = line.match(/sync\s+(.+?)\s+across\s+(.+)/);
          if (syncMatch) {
            const platforms = this.fixPlatformArray(syncMatch[2].trim());
            this.emit(`await AeThex.sync('${syncMatch[1]}', ${platforms});`);
          }
        } else if (line.startsWith('notify ')) {
          const msgMatch = line.match(/notify\s+"(.+?)"/);
          if (msgMatch) {
            this.emit(`AeThex.notify(\`${msgMatch[1]}\`);`);
          }
        } else if (line.startsWith('reveal ')) {
          const content = line.match(/reveal\s+(.+)/);
          if (content) {
            this.emit(`AeThex.reveal(${content[1]});`);
          }
        } else if (line.startsWith('broadcast ')) {
          const msgMatch = line.match(/broadcast\s+"(.+?)"/);
          if (msgMatch) {
            this.emit(`AeThex.broadcast(\`${msgMatch[1]}\`);`);
          }
        } else if (line.startsWith('grant ') || line.startsWith('require ')) {
          // Handle grant/require as comments for now
          this.emit(`// ${line}`);
        } else if (line.startsWith('return ')) {
          const valueMatch = line.match(/return\s+(.+)/);
          if (valueMatch) {
            this.emit(`return ${this.transformExpression(valueMatch[1])};`);
          }
        } else {
          this.emit(this.transformExpression(line));
        }
      }
      i++;
    }
    
    this.indent--;
    this.emit(`}`);
    this.emit(``);
    
    return i + 1;
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

  compileEnvironment(lines, start) {
    this.emit(`// Environment Block`);
    this.emit(`{`);
    this.indent++;
    
    let i = start + 1;
    let environment = {};
    
    while (i < lines.length && !lines[i].trim().startsWith('}') && !lines[i].trim().startsWith('journey')) {
      const line = lines[i].trim();
      if (line && !line.startsWith('#')) {
        const propMatch = line.match(/(\w+):\s*(.+)/);
        if (propMatch) {
          const [, key, value] = propMatch;
          environment[key] = value;
          this.emit(`AeThex.environment.${key} = '${value.replace(',', '')}';`);
        }
      }
      i++;
    }
    
    // Continue with nested journey if present
    if (lines[i].trim().startsWith('journey')) {
      i = this.compileJourney(lines, i);
    }
    
    this.indent--;
    this.emit(`}`);
    this.emit(``);
    
    return i;
  }

  fixPlatformArray(platformsStr) {
    // Convert [roblox, uefn, web] to ["roblox", "uefn", "web"]
    if (platformsStr.startsWith('[') && platformsStr.endsWith(']')) {
      const items = platformsStr.slice(1, -1).split(',').map(item => {
        item = item.trim();
        // If already quoted, return as-is
        if (item.startsWith('"') || item.startsWith("'")) {
          return item;
        }
        // Quote it
        return `"${item}"`;
      });
      return `[${items.join(', ')}]`;
    }
    return platformsStr;
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
      
      // Count braces for depth tracking
      const openBraces = (line.match(/{/g) || []).length;
      const closeBraces = (line.match(/}/g) || []).length;
      
      // Check for closing brace
      if (line === '}') {
        depth--;
        if (depth === 0) {
          this.indent--;
          this.emit('}');
          return i + 1;
        }
        this.indent--;
        this.emit('}');
        i++;
        continue;
      }
      
      // Update depth
      depth += openBraces - closeBraces;
      
      if (line && !line.startsWith('#')) {
        // Handle nested if statements
        if (line.startsWith('if ')) {
          const ifMatch = line.match(/if\s+(.+?)\s*{/);
          if (ifMatch) {
            this.emit(`if (${ifMatch[1]}) {`);
            this.indent++;
          }
        } 
        // Handle else/otherwise
        else if (line === '} otherwise {' || line === 'otherwise {') {
          if (line.startsWith('}')) {
            this.indent--;
            this.emit('}');
          }
          this.emit('else {');
          this.indent++;
        }
        // Handle sync
        else if (line.startsWith('sync ')) {
          const syncMatch = line.match(/sync\s+(.+?)\s+across\s+(.+)/);
          if (syncMatch) {
            const platforms = this.fixPlatformArray(syncMatch[2].trim());
            this.emit(`await AeThex.sync('${syncMatch[1]}', ${platforms});`);
          }
        }
        // Handle notify
        else if (line.startsWith('notify ')) {
          const msgMatch = line.match(/notify\s+"(.+?)"/);
          if (msgMatch) {
            this.emit(`AeThex.notify(\`${msgMatch[1]}\`);`);
          }
        }
        // Handle reveal
        else if (line.startsWith('reveal ')) {
          const revealMatch = line.match(/reveal\s+(.+)/);
          if (revealMatch) {
            this.emit(`AeThex.reveal(${revealMatch[1]});`);
          }
        }
        // Handle broadcast
        else if (line.startsWith('broadcast ')) {
          const msgMatch = line.match(/broadcast\s+"(.+?)"/);
          if (msgMatch) {
            this.emit(`AeThex.broadcast(\`${msgMatch[1]}\`);`);
          }
        }
        // Handle trigger
        else if (line.startsWith('trigger ')) {
          const triggerMatch = line.match(/trigger\s+(.+)/);
          if (triggerMatch) {
            this.emit(`AeThex.recordHistory({ type: 'trigger', event: '${triggerMatch[1]}' });`);
          }
        }
        // Handle grant/require
        else if (line.startsWith('grant ') || line.startsWith('require ')) {
          this.emit(`// ${line}`);
        }
        // Pass through everything else
        else if (line !== '}') {
          this.emit(this.transformExpression(line));
        }
      }
      i++;
    }
    
    // Close any remaining blocks
    while (depth > 0) {
      this.indent--;
      this.emit('}');
      depth--;
    }
    
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
        // Handle notify
        if (line.startsWith('notify ')) {
          const msgMatch = line.match(/notify\s+"(.+?)"/);
          if (msgMatch) {
            this.emit(`AeThex.notify(\`${msgMatch[1]}\`);`);
          } else {
            // notify without quotes - treat as variable
            const varMatch = line.match(/notify\s+(.+)/);
            if (varMatch) {
              this.emit(`AeThex.notify(${varMatch[1]});`);
            }
          }
        }
        // Handle broadcast
        else if (line.startsWith('broadcast ')) {
          const msgMatch = line.match(/broadcast\s+"(.+?)"/);
          if (msgMatch) {
            this.emit(`AeThex.broadcast(\`${msgMatch[1]}\`);`);
          }
        }
        // Handle reveal
        else if (line.startsWith('reveal ')) {
          const revealMatch = line.match(/reveal\s+(.+)/);
          if (revealMatch) {
            this.emit(`AeThex.reveal(${revealMatch[1]});`);
          }
        }
        // Everything else
        else {
          this.emit(this.transformExpression(line));
        }
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

  compileWorkflow(lines, start) {
    const match = lines[start].match(/workflow\s+(\w+)\s*{/);
    if (!match) return start + 1;
    
    const workflowName = match[1];
    this.emit(`// Workflow: ${workflowName}`);
    this.emit(`async function ${workflowName}() {`);
    this.indent++;
    this.emit(`console.log('⚔️ Workflow Started: ${workflowName}');`);
    
    let i = start + 1;
    let depth = 1;
    
    while (i < lines.length && depth > 0) {
      const line = lines[i].trim();
      
      // Check for closing brace first
      if (line === '}') {
        depth--;
        if (depth === 0) break; // End of workflow
        // Otherwise it's closing a stage block
        this.indent--;
        this.emit('}');
        i++;
        continue;
      }
      
      // Track opening braces
      if (line.endsWith('{')) depth++;
      
      if (line && !line.startsWith('#')) {
        // Handle stage blocks
        if (line.startsWith('stage ')) {
          const stageMatch = line.match(/stage\s+(\w+)\s*{/);
          if (stageMatch) {
            this.emit(`// Stage: ${stageMatch[1]}`);
            this.emit(`{`);
            this.indent++;
          }
        }
        // Handle passport declarations inside stages
        else if (line.startsWith('passport ')) {
          i = this.compilePassport(lines, i);
          continue;
        }
        // Handle notify
        else if (line.startsWith('notify ')) {
          const msgMatch = line.match(/notify\s+"(.+?)"/);
          if (msgMatch) {
            this.emit(`AeThex.notify(\`${msgMatch[1]}\`);`);
          }
        }
        // Handle reveal
        else if (line.startsWith('reveal ')) {
          const revealMatch = line.match(/reveal\s+"(.+?)"/);
          if (revealMatch) {
            this.emit(`AeThex.reveal(\`${revealMatch[1]}\`);`);
          }
        }
        // Handle broadcast
        else if (line.startsWith('broadcast ')) {
          const msgMatch = line.match(/broadcast\s+"(.+?)"/);
          if (msgMatch) {
            this.emit(`AeThex.broadcast(\`${msgMatch[1]}\`);`);
          }
        }
      }
      i++;
    }
    
    this.emit(`console.log('✅ Workflow Complete: ${workflowName}');`);
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
      if (line.startsWith('journey ')) {
        i = this.compileJourney(lines, i);
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
      .replace(/notify\s+"(.+?)"/, 'AeThex.notify(`$1`)')
      .replace(/broadcast\s+"(.+?)"/, 'AeThex.broadcast(`$1`)')
      .replace(/reveal\s+(.+)/, 'AeThex.reveal($1)')
      .replace(/\$\{(.+?)\}/g, '${$1}'); // Preserve template literals
  }

  transformValue(value) {
    value = value.trim();
    
    // Handle arrays with proper formatting
    if (value.startsWith('[')) {
      // Parse array items and ensure they're properly quoted strings
      const arrayMatch = value.match(/\[(.*)\]/);
      if (arrayMatch) {
        const items = arrayMatch[1].split(',').map(item => {
          item = item.trim();
          // If it's already quoted, keep it
          if (item.startsWith('"') || item.startsWith("'")) {
            return item;
          }
          // Otherwise quote it
          return `"${item}"`;
        });
        return `[${items.join(', ')}]`;
      }
      return value;
    }
    
    // Handle objects - return as-is, they'll be parsed line by line
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
    
    // Handle strings that are already quoted
    if (value.startsWith('"') || value.startsWith("'")) {
      return value;
    }
    
    // Default to string
    return `"${value}"`;
  }

  emit(code) {
    // Prevent negative indent
    if (this.indent < 0) this.indent = 0;
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
    console.log('Usage: node aethex-compiler.js <input.aethex> [output.js]');
    process.exit(1);
  }
  
  const inputFile = args[0];
  const outputFile = args[1] || inputFile.replace('.aethex', '.js');
  
  try {
    const aethexCode = fs.readFileSync(inputFile, 'utf-8');
    const compiler = new AeThexCompiler();
    const jsCode = compiler.compile(aethexCode);
    
    fs.writeFileSync(outputFile, jsCode);
    console.log(`✨ Compiled ${inputFile} → ${outputFile}`);
  } catch (error) {
    console.error('🌐 Cross-Platform Error:', error.message);
    process.exit(1);
  }
}

module.exports = AeThexCompiler;
