import React, { forwardRef } from 'react'

import { SvgRoot } from './styles'
import { SvgPropsInterface } from './types'

const Svg = forwardRef<HTMLObjectElement, SvgPropsInterface>(
    ({ path, ...rest }: SvgPropsInterface, ref) => {
        return <SvgRoot ref={ref} data={path} type='image/svg+xml' {...rest} />
    }
)

export default Svg
