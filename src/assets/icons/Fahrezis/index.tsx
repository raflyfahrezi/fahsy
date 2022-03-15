/* eslint-disable @typescript-eslint/no-var-requires */

import React from 'react'

import { Svg } from '@/components'

const icon = require('./icon.svg') as string

const FahrezisIcon = () => {
    return <Svg path={icon} />
}

export default FahrezisIcon
