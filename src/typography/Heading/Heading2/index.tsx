import React, { forwardRef } from 'react'

import { Heading2Root } from '../styles'
import { HeadingPropsInterface } from '../types'

const Heading2 = forwardRef<HTMLHeadingElement, HeadingPropsInterface>(
    ({ children, ...rest }: HeadingPropsInterface, ref) => {
        return (
            <Heading2Root ref={ref} {...rest}>
                {children}
            </Heading2Root>
        )
    }
)

export default Heading2
