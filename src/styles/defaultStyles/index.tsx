import React from 'react'
import { css, Global } from '@emotion/react'

const defaultStylesCSS = css`
    * {
        margin: 0;
        padding: 0;
    }
`

const DefaultStyles = () => {
    return <Global styles={defaultStylesCSS} />
}

export default DefaultStyles
