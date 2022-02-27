import { fontType, fontSizeType, fontLineHeightType } from './types'

const fontSize: fontSizeType = {
    12: '12px',
    14: '14px',
    16: '16px',
    18: '18px',
    20: '20px',
    24: '24px',
    32: '32px',
    48: '48px',
}

const fontLineHeight: fontLineHeightType = {
    12: '19.416px',
    14: '22.652px',
    16: '25.888px',
    18: '29.124px',
    20: '32.360px',
    24: '38.832px',
    32: '51.776px',
    48: '77.664px',
}

const font: fontType = {
    size: fontSize,
    lineHeight: fontLineHeight,
}

export default font
