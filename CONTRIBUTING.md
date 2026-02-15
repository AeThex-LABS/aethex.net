# Contributing to AeThex Language

Thanks for your interest in contributing to AeThex! 

## How to Contribute

### Reporting Bugs

Found a bug? Open an issue with:
- AeThex code that reproduces the bug
- Expected behavior
- Actual behavior
- Your environment (OS, Node version)

### Suggesting Features

Want a new feature? Open an issue with:
- Use case description
- Example AeThex syntax (if applicable)
- Why this would be useful

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test your changes (`npm test`)
5. Commit (`git commit -m 'Add amazing feature'`)
6. Push (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Development Setup

```bash
git clone https://github.com/yourusername/aethex-lang.git
cd aethex-lang
node aethex-compiler.js examples/test-simple.aethex
node examples/test-simple.js
```

## Code Style

- Use 2 spaces for indentation
- Write clear, descriptive variable names
- Add comments for complex logic
- Keep functions focused and small

## Testing

Before submitting a PR:

```bash
# Test the compiler
npm test

# Test examples
npm run example
```

## Areas We Need Help

- **Lua Compiler** - Roblox compilation target
- **Blueprint Compiler** - UEFN compilation target
- **C# Compiler** - Unity compilation target
- **VS Code Extension** - Syntax highlighting and autocomplete
- **Documentation** - Examples, tutorials, guides
- **Standard Library** - Common patterns and utilities

## Questions?

Open an issue or reach out on Discord: [discord.gg/aethex](https://discord.gg/aethex)

Thanks for contributing! 🌐
