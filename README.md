
# Jacac-For-Max
**Jacdac-for-max** is a combination of node.js scripts and custom Max objects which enable the use of [**Jacdac**](https://aka.ms/jacdac), a modular plug-and-play hardware prototyping platform, with Max a visual programming language frequently used for audio-visual applications. 



# Getting started
This repository contains an example Max project: [jacdac-for-max.maxproj](./jacdac-for-max.maxproj).

Open this project, and connect your jacdac device to your computer. You can


## Developer setup

-   clone this repository and pull all submodules

```
git clone https://github.com/hartley9/jacdac-for-max
cd jacdac-for-max/node_content
```

-   install node.js


-   install dependencies

```
npm install
```

### Visual Studio Code

You are welcome to use any editor you want! Visual Studio Code
provides seamless support for git sub-modules and is our preferred editor.

-   open [Visual Studio Code](https://code.visualstudio.com/)

```
code .
```

### Launch Example

To see an example of how this works launch the jacdac-for-max.maxproj file, this will open as a Max project containing a number of files. 


### Generating NodeJS Snippets and jacdac-for-max Max Objects
To regeneratre both the node-js snippets and jacdac-for-max objects.

```
npm run generate
```

otherwise to generate just nodejs snippets

```
npm run generate_nodejs_snippets
```

or the Max objects

```
npm run generate_max_objects
```


### Jacdac + MakeCode

### Local build

Run this command to rebuild the makecode packages

```
yarn buildpxt
```

### HTML Tools




