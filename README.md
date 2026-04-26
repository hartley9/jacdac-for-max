
# Jacdac-for-Max

**Jacdac-for-Max** enables you to connect [**Jacdac**](https://aka.ms/jacdac) hardware devices to [**Max/MSP**](https://cycling74.com/products/max), a visual programming language for music, audio, and interactive media. 

This project combines Node.js scripts with custom Max objects to provide real-time sensor data and control over 40+ Jacdac services including accelerometers, buttons, gamepads, temperature sensors, and more.

## Features

- **40+ pre-built Max objects** for common Jacdac services
- **Auto-generation** of Max objects from Jacdac service definitions
- **Real-time sensor data** streaming directly to Max patches
- **Easy integration** - just add objects to your Max patch and connect devices

## Project Structure

```
jacdac-for-max/
├── node_content/          # Node.js server and TypeScript source
│   ├── src/              # Source code for generators
│   ├── services/         # Generated Node.js service modules, this code sits inside a JDService object when a relevent service is detected
│   └── package.json
├── max_objects/          # Generated Max objects (one per Jacdac service)
│   ├── JDServiceAccelerometer.maxpat
│   ├── JDServiceButton.maxpat
│   └── ... (40+ more)
├── js_objects/           # JavaScript/TypeScript utilities
├── examples/             # Example Max patches
└── jacdac-for-max.maxproj  # Main Max project
```

## Quick Start

### Prerequisites
- [Max 8+](https://cycling74.com/products/max)
- [Node.js 18+](https://nodejs.org/)
- Jacdac hardware device

### Setup

1. **Clone and install**
```bash
git clone https://github.com/hartley9/jacdac-for-max
cd jacdac-for-max/node_content
npm install
```

2. **Open the example project**
- Launch Max
- Open `jacdac-for-max.maxproj`

3. **Connect your Jacdac device** to your computer via USB

4. **Run the server** inside Max (start the node.js context)

5. **Use the Max objects** - drag them into your patch to stream sensor data

## Development

### Building

Generate Max objects and Node.js modules from Jacdac service definitions:

```bash
cd node_content
npm run generate
```

This regenerates both Node.js snippets and all Max objects based on the latest Jacdac services.

Other build commands:
```bash
npm run generatePats          # Generate only Max patches
npm run rimraf                # Clear output directory
npm build                     # Build TypeScript to JavaScript
```

### Using VS Code

Visual Studio Code is recommended for development:

```bash
code .
```

## Troubleshooting

### `npm run generate` crashes
- Run `npm install` to ensure local dependencies are installed
- The `--transpile-only` flag is already configured
- Check that `node_modules/@cspotcode/source-map-support` exists

### Max objects not updating
- Run `npm run generate` again
- Restart the Max JS context (Cmd-Period on Mac)
- Clear Max's cache: **Max > Preferences > File Preferences**

## Resources

- [Jacdac Documentation](https://jacdac.github.io/jacdac-docs/)
- [Max Documentation](https://cycling74.com/docs/max8)
- [Jacdac Examples](https://aka.ms/jacdac-devices)

## License

See [LICENSE](./LICENSE) for details.




