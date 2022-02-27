import React from 'react'
import { ThemeProvider } from '@emotion/react'

import { Themes, Globals } from '@/styles'

import { ProviderPropsInterface } from './types'

const Provider = ({ children }: ProviderPropsInterface) => {
    return (
        <ThemeProvider theme={Themes}>
            <Globals />
            {children}
        </ThemeProvider>
    )
}

export default Provider
