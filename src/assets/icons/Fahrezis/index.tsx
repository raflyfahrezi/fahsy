/* eslint-disable @typescript-eslint/no-var-requires */

import React from 'react'

import { Svg } from '@/components'

import { FahrezisIconProps } from './types'

const iconGray = require('./icon-gray.svg') as string
const iconYellow = require('./icon-yellow.svg') as string

const FahrezisIcon = ({ type }: FahrezisIconProps) => {
    return <Svg path={type === 'gray' ? iconGray : iconYellow} />
}

export default FahrezisIcon
