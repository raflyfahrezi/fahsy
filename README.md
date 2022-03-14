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

## Requirements

This package needs some dependencies. Make sure you have installed below dependencies before using this package.

```json
{
    "@fontsource/poppins": "^4.5.3",

    "react": "^17.0.2",
    "react-dom": "^17.0.2"
}
```

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
        // Red
        red: '#F84141',
        lightRed: '#FC9C9F',
        subtleRed: '#FFC2C2',

        // Green
        green: '#46D851',
        darkGreen: '#007531',

        // Blue
        blue: '#FC9C9F',
        darkBlue: '#2951A6',

        // Others
        white: '#FFFFFF',
        orange: '#FF891C',
        purple: '#7B61FF',
        darkYellow: '#AB9000',
    },
    tertiary: {
        // Grey
        grey: '#B8B8B8',
        darkGrey: '#767575',
        subtleGrey: '#F7F7F7',

        // Black
        lightBlack: '#373737',
        darkerBlack: '#161616',

        lineStroke: '#424242',
    },
    system: {
        black: {
            1: '#161616',
            2: '#1A1A1A',
            3: '#282828',
            4: '#373737',
            5: '#494949',
            6: '#7E7E7E',
        },
        yellow: {
            1: '#3F3A23',
            2: '#78681C',
            3: '#AB9000',
            4: '#C6AD28',
            5: '#E7C71F',
            6: '#FFE247',
        },
        green: {
            1: '#007531',
            2: '#2C9D29',
            3: '#2EB438',
            4: '#46D851',
            5: '#70F07A',
            6: '#B4FFB9',
        },
        red: {
            1: '#9D2929',
            2: '#C33232',
            3: '#CB3535',
            4: '#F84141',
            5: '#FC9C9F',
            6: '#FFC2C2',
        },
        blue: {
            1: '#1E3973',
            2: '#2951A6',
            3: '#3E7BFA',
            4: '#709CF6',
            5: '#B6C9EF',
            6: '#DCE4F4',
        },
        orange: {
            1: '#3F2B23',
            2: '#78481C',
            3: '#A15F22',
            4: '#D3761F',
            5: '#FF891C',
            6: '#FBAB62',
        },
        purple: {
            1: '#240D54',
            2: '#32009E',
            3: '#4700E0',
            4: '#5A41D7',
            5: '#7B61FF',
            6: '#9C93C7',
        },
    },
}
```

To use the colors all you have to do is import the colors.

```js
import { colors } from 'fahsy'
```

### Fonts

In our design system we used `Poppins` as our font family. So, we need this library to load the font family.

```bash
npm i @fontsource/poppins # for NPM

yarn add @fontsource/poppins # for Yarn
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
