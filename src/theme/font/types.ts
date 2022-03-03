export type fontVariantType = 12 | 14 | 16 | 18 | 20 | 24 | 32 | 48

export type fontSizeType = Record<fontVariantType, string>

export type fontLineHeightType = Record<fontVariantType, string>

export type fontType = {
    family: string
    size: fontSizeType
    lineHeight: fontLineHeightType
}
