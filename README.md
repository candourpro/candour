# Candour
***This is a pre-release***

⚡️ Fluid design framework for React.

## Core ideas

### Fluidity

Every element is in harmony with the viewport width - every padding, font size and margin. Bigger viewport means bigger fonts and sizes. This is achieved by having using a `fluid` utility that depends on the viewport width.

### Harmonic rhythm between elements

There is a grid-like relationship between sizes of the elements which is achieved by having a defined `step` size for everything.

### Composable

It is built on a composable `container` structure - everything is themable & easily extendable.

## Getting started

### Install

To install the framework:
```sh
yarn add candour
# or
npm install candour —save
```

### Setup custom theme

For the theming to work, you need to set up a `CandourProvider`. Here’s an example for Create React App:

```javascript
import React from 'react'
import { render } from 'react-dom'
import { CandourProvider } from 'candour'

const candourTheme = {
  heading: {
    2: {
      padding: 3,
    },
  },
}

render(
  <CandourProvider value={candourTheme}>
    <Heading level={2}>
      This is your heading
    </Heading>
  </CandourProvider>,
  document.getElementById('root')
)
```

## Primitives

### Container

Container is a primitive component on which every other component builds upon. You can also use it in places where you’d otherwise use `div` or a `span` HTML tag.

```jsx
import { Container } from 'candour'

render(
  <Container backgroundColor='tomato'>
  </Container>
)
```

`Container` accepts all CSS properties as camelCased props which then are merged into the style property. Here are all the available keys:
[CSS properties]

All the properties that a related to sizes can be specified in steps:
```jsx
import { Container } from 'candour'

render(
  <Container padding={2}>
    I am a container
  </Container>
)

// equivalent to:
render(
  <Container padding={step(2)}>
    I am a container
  </Container>
)
```

It is advisable from the rhythmical design perspective to always use sizes that are based on steps.

### Heading

`Heading` is a special component that builds on a `Container` (inherits all the CSS properties) but also is defined in a theme (at `theme.heading`).

It has special `level` prop that defines which HTML component and style to use.

 ```jsx
import { Heading } from 'candour'

render(
  <Heading level={2}>
    I am a h2 heading
  </Heading>
)
```

#### Theming

`candourTheme.js`
```javascript
export default {
  heading: {
    2: {
      // this will make the padding of `<Heading level={2} />` equal to `step(3)`.
      padding: 3,
    },
  },
}
```
