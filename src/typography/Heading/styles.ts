import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { font, common, colors } from '@/theme'

export const HeadingBase = () => css`
    font-weight: bold;
    font-family: ${font.family};

    color: ${colors.secondary.white};
`

export const Heading1Root = styled.h1`
    ${HeadingBase}

    font-size: ${font.size[56]};

    line-height: ${font.lineHeight[56]};

    @media (max-width: ${common.phoneBreakpoints}) {
        font-size: ${font.size[48]};

        line-height: ${font.lineHeight[48]};
    }
`

export const Heading2Root = styled.h2`
    ${HeadingBase}

    font-size: ${font.size[48]};

    line-height: ${font.lineHeight[48]};

    @media (max-width: ${common.phoneBreakpoints}) {
        font-size: ${font.size[36]};

        line-height: ${font.lineHeight[36]};
    }
`

export const Heading3Root = styled.h3`
    ${HeadingBase}

    font-size: ${font.size[36]};

    line-height: ${font.lineHeight[36]};

    @media (max-width: ${common.phoneBreakpoints}) {
        font-size: ${font.size[30]};

        line-height: ${font.lineHeight[30]};
    }
`
