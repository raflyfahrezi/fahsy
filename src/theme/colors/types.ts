// Initialization
export type colorsPrimaryType = 'black' | 'yellow' | 'subtleBlack'

export type colorsSecondaryType =
    | 'red'
    | 'lightRed'
    | 'subtleRed'
    | 'green'
    | 'darkGreen'
    | 'blue'
    | 'darkBlue'
    | 'white'
    | 'orange'
    | 'purple'
    | 'darkYellow'

export type colorsTertiaryType =
    | 'grey'
    | 'subtleGrey'
    | 'darkGrey'
    | 'lightBlack'
    | 'darkerBlack'
    | 'lineStroke'

export type colorsPrimaryRecord = Record<colorsPrimaryType, string>

export type colorsSecondaryRecord = Record<colorsSecondaryType, string>

export type colorsTertiaryRecord = Record<colorsTertiaryType, string>

// Type
export type colorsType = {
    primary: colorsPrimaryRecord
    secondary: colorsSecondaryRecord
    tertiary: colorsTertiaryRecord
}
