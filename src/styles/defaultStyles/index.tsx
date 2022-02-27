import React from 'react'
import { css, Global } from '@emotion/react'

const defaultStylesCSS = css`
    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }
`

const DefaultStyles = () => {
    return <Global styles={defaultStylesCSS} />
}

export default DefaultStyles
