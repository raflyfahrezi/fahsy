import React from 'react'
import { css, Global } from '@emotion/react'

const globalsCSS = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

const Globals = () => {
    return <Global styles={globalsCSS} />
}

export default Globals
