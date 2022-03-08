<div align="center">

# fahsy

</div>

<div align="center"> 
    <p style="font-weight:bold;color:#dc3546;">This package is still in development</p>
</div>

&nbsp;

[![NPM Publish](https://github.com/raflyfahrezi/fahsy/actions/workflows/npm_publish.yml/badge.svg)](https://github.com/raflyfahrezi/fahsy/actions/workflows/npm_publish.yml)
[![Build](https://github.com/raflyfahrezi/fahsy/actions/workflows/build.yml/badge.svg)](https://github.com/raflyfahrezi/fahsy/actions/workflows/build.yml)
[![Testing](https://github.com/raflyfahrezi/fahsy/actions/workflows/testing.yml/badge.svg)](https://github.com/raflyfahrezi/fahsy/actions/workflows/testing.yml)

Design System for [fahrezis](https://fahrezis.com) apps ecosystem.

## How to Use

Install fahsy using NPM or Yarn. Run the following command

```bash
npm i fahsy # for NPM

yarn add fahsy # for Yarn
```

Here you go. For complete guide using this libraries please read our full documentation at this [Storybook](https://fahsy.vercel.app/?path=/story/introduction--page).

## Components

We have some components to use like Input, Select and Button. Some example below:

```js
import { Container, Button } from 'fahsy'

const index = () => {
    return (
        <Container size='md'>
            <Button></Button>
        </Container>
    )
}

export default index
```

## Themes

We provide themes for consistancy of design. Here is our themes content.

### Colors

We have colors that used in our ecosystem. We divide it into 3 groups which is primary, secondary and tertiary.

```js
const colors: colorsType = {
    primary: {
        black: '#1A1A1A',
        yellow: '#FFE247',
        subtleBlack: '#282828',
    },
    secondary: {
        red: '#F84141',
        green: '#46D851',
        subtleRed: '#FFC2C2',
        darkGreen: '#007531',
        darkYellow: '#AB9000',
    },
    tertiary: {
        grey: '#B8B8B8',
        lineStroke: '#424242',
        subtleGrey: '#F7F7F7',
    },
}
```

To use the colors all you have to do is import the colors.

```js
import { colors } from 'fahsy'
```

### Fonts

In our design system we used `Open Sans` as our font family. So, we need this library to load the font family.

```bash
npm i @fontsource/open-sans # for NPM

yarn add @fontsource/open-sans # for Yarn
```

To use the font just import it from this library.

```
import { font } from 'fahsy'
```

And you will get an object like this.

```js
const font: fontType = {
    family: '"Open Sans"',
    size: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        32: '32px',
        48: '48px',
    },
    lineHeight: {
        12: '19.416px',
        14: '22.652px',
        16: '25.888px',
        18: '29.124px',
        20: '32.360px',
        24: '38.832px',
        32: '51.776px',
        48: '77.664px',
    },
}

export default font
```

## License

I don't know much about repository license. Besides this is public repository feel free to explore and learning about React Component Library. Might be you found something helpful and useful for you.

&nbsp;

<p align="center" style="font-weight: bold;">
2022 &middot; Farhan Rafly Fahrezi S
</p>
