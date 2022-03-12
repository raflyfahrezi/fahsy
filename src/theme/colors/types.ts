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

export type colorsSystemLevelType = 1 | 2 | 3 | 4 | 5 | 6

export type colorsPrimaryRecord = Record<colorsPrimaryType, string>
export type colorsSecondaryRecord = Record<colorsSecondaryType, string>
export type colorsTertiaryRecord = Record<colorsTertiaryType, string>

export type colorsSystemBlackRecord = Record<colorsSystemLevelType, string>
export type colorsSystemYellowRecord = Record<colorsSystemLevelType, string>
export type colorsSystemGreenRecord = Record<colorsSystemLevelType, string>
export type colorsSystemRedRecord = Record<colorsSystemLevelType, string>
export type colorsSystemBlueRecord = Record<colorsSystemLevelType, string>
export type colorsSystemOrangeRecord = Record<colorsSystemLevelType, string>
export type colorsSystemPurpleRecord = Record<colorsSystemLevelType, string>

// Type

export type colorsSystemType = {
    black: colorsSystemBlackRecord
    yellow: colorsSystemYellowRecord
    green: colorsSystemGreenRecord
    red: colorsSystemRedRecord
    blue: colorsSystemBlueRecord
    orange: colorsSystemOrangeRecord
    purple: colorsSystemPurpleRecord
}

export type colorsType = {
    primary: colorsPrimaryRecord
    secondary: colorsSecondaryRecord
    tertiary: colorsTertiaryRecord
    system: colorsSystemType
}
