import React from 'react'

import { BackgroundRoot } from './styles'
import { BackgroundPropsInterface } from './types'

const Background = ({ children }: BackgroundPropsInterface) => {
    return <BackgroundRoot>{children}</BackgroundRoot>
}

export default Background
