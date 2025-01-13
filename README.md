# Movies-TvSeries-App 

I have been developing a web application about movies and tvseries using <b>Chakra UI </b> framework of React and <b>TMDB API </b> used to fetch movies and tvseries data.
 

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<p align="center">
  <a href="https://github.com/chakra-ui/chakra-ui">
    <img src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true" alt="Chakra logo" width="300" />
  </a>
</p>

<h1 align="center">Build Accessible React Apps with Speed ⚡️</h1>
<br />

<p align="center">
  <img alt="Bundle Size" src="https://badgen.net/bundlephobia/minzip/@chakra-ui/react"/>
  <img alt="Github Checks" src="https://badgen.net/github/checks/chakra-ui/chakra-ui/main"/>
  <a href="https://github.com/chakra-ui/chakra-ui/blob/main/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/chakra-ui/chakra-ui"/>
  </a>
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@chakra-ui/react.svg?style=flat"/>
  <img alt="Github Stars" src="https://badgen.net/github/stars/chakra-ui/chakra-ui" />
  <a href="https://discord.gg/chakra-ui">
    <img alt="Discord" src="https://img.shields.io/discord/660863154703695893.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2" />
  </a>
</p>

<br />

Chakra UI is a comprehensive library of accessible, reusable, and composable
React components that streamlines the development of modern web applications and
websites. The library offers a diverse range of components that can be easily
combined to build complex user interfaces while adhering to accessibility best
practices.

## Table of contents

- 📋 [Documentation](#documentation)
- 🚀 [Features](#features)
- 📦 [Installation](#installation)
- 💻 [Usage](#usage)
- 📚 [CodeSandbox Templates](#codesandbox-templates)
- 📖 [`create-react-app` Templates](#create-react-app-templates)
- 📝 [Contributing](#contributing)
- 💖 [Support](#support-chakra-ui)
- 🙌 [Testimonials](#testimonials)
- 🏆 [Awards and Mentions](#awards-and-mentions)
- ✨ [Contributors](#contributors)
- ⚖️ [License](#license)

## Documentation

It's the https://chakra-ui.com website for the latest version of Chakra UI. For
older versions head over here

- v2: https://v2.chakra-ui.com
- v1: https://v1.chakra-ui.com
- v0: https://v0.chakra-ui.com

## Features

- Ease of Styling: Chakra UI contains a set of layout components like `Box` and
  `Stack` that make it easy to style your components by passing props.
  [Learn more](https://www.chakra-ui.com/docs/styling/style-props/background)
- Flexible & composable: Chakra UI components are built on top of a React UI
  Primitive for endless composability.
- Accessible. Chakra UI components follow the WAI-ARIA guidelines specifications
  and have the right `aria-*` attributes.
- Dark Mode 😍: Most components in Chakra UI are dark mode compatible.

## Installation

To use Chakra UI components, all you need to do is install the
`@chakra-ui/react` package and its peer dependencies:

```sh
# with Yarn
$ yarn add @chakra-ui/react @emotion/react

# with npm
$ npm i @chakra-ui/react @emotion/react

# with pnpm
$ pnpm add @chakra-ui/react @emotion/react

# with Bun
$ bun add @chakra-ui/react @emotion/react
```

## Usage

To start using the components, please follow these steps:

1. Wrap your application with the `ChakraProvider` provided by
   **@chakra-ui/react**.

```jsx
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"

// Do this at the root of your application
function App({ children }) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
}
```

Optionally, you can wrap your application with the `ColorModeProvider` so you
can toggle between light and dark mode within your app.

2. Now you can start using components like so!:

```jsx
import { Button } from "@chakra-ui/react"

function Example() {
  return <Button>I just consumed some ⚡️Chakra!</Button>
}
```

More guides on how to get started are available
[here](https://chakra-ui.com/getting-started)

## CodeSandbox Templates

- JavaScript Starter: https://codesandbox.io/s/chakra-ui-javascript-lzzg9
- TypeScript Starter: https://codesandbox.io/s/chakra-ui-typescript-pomi8
- NextJS TypeScript Starter:
  https://codesandbox.io/s/chakra-ui-next-js-typescript-kxvyr

## `create-react-app` Templates

[Check out our guide](https://chakra-ui.com/getting-started/cra-guide) for
information on how to use our official `create-react-app` templates.

