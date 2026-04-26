
# Jacdac-for-Max

**Jacdac-for-Max** enables you to connect [**Jacdac**](https://aka.ms/jacdac) hardware devices to [**Max/MSP**](https://cycling74.com/products/max), a visual programming language for music, audio, and interactive media. 

This project combines Node.js scripts with custom Max objects to provide real-time sensor data and control over 30+ Jacdac services including accelerometers, buttons, gamepads, temperature sensors, and more.

## Features

- **30+ pre-built Max objects** for common Jacdac services
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
│   └── ... (30+ more)
├── js_objects/           # JavaScript/TypeScript utilities
├── examples/             # Example Max patches
└── jacdac-for-max.maxproj  # Main Max project
```

## Quick Start

### Prerequisites
- [Max 8+](https://cycling74.com/products/max)
- [Node.js 18+](https://nodejs.org/)
- Jacdac hardware device

### Setup — macOS

1. **Download** the latest release zip from the [Releases page](https://github.com/hartley9/jacdac-for-max/releases) and extract it into your Max Library folder (`~/Documents/Max 8/Library/` or `~/Documents/Max 9/Library/`)

2. **Install dependencies** — open Terminal and run:
```bash
~/Documents/Max\ 9/Library/jacdac-for-max/setup.sh
```
This compiles the native Node.js modules on your machine (required to avoid macOS security warnings). You only need to do this once.

3. **Open the starter patch** — launch Max and open `starter/Jacdac-for-Max Starter Patch.maxpat`

4. **Connect your Jacdac device** via USB

5. **Run the server** inside Max (start the node.js context)

6. **Use the Max objects** — drag them into your patch to stream sensor data

### Setup — Windows

1. **Install Node.js** from [nodejs.org](https://nodejs.org/). During installation, check **"Automatically install the necessary tools"** — this installs the C++ build tools required to compile native modules.

2. **Download** the latest release zip from the [Releases page](https://github.com/hartley9/jacdac-for-max/releases) and extract it into your Max Library folder (`Documents\Max 8\Library\` or `Documents\Max 9\Library\`)

3. **Install dependencies** — double-click `setup.bat` inside the extracted folder. A terminal window will open and install the required modules. You only need to do this once.

4. **USB driver** — if your Jacdac device is not detected, you may need to install the WinUSB driver using [Zadig](https://zadig.akeo.ie/). Select your Jacdac device and install the WinUSB driver.

5. **Open the starter patch** — launch Max and open `starter\Jacdac-for-Max Starter Patch.maxpat`

6. **Connect your Jacdac device** via USB

7. **Run the server** inside Max (start the node.js context)

8. **Use the Max objects** — drag them into your patch to stream sensor data

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




