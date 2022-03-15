import React, { forwardRef } from 'react'

import { Heading1Root } from '../styles'
import { HeadingPropsInterface } from '../types'

const Heading1 = forwardRef<HTMLHeadingElement, HeadingPropsInterface>(
    ({ children, ...rest }: HeadingPropsInterface, ref) => {
        return (
            <Heading1Root ref={ref} {...rest}>
                {children}
            </Heading1Root>
        )
    }
)

export default Heading1
