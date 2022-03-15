import React from 'react'

import { SvgRoot } from './styles'
import { SvgPropsInterface } from './types'

const Svg = ({ path, ...rest }: SvgPropsInterface) => {
    return <SvgRoot data={path} type='image/svg+xml' {...rest} />
}

export default Svg
