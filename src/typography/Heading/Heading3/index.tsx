import React, { forwardRef } from 'react'

import { Heading3Root } from '../styles'
import { HeadingPropsInterface } from '../types'

const Heading3 = forwardRef<HTMLHeadingElement, HeadingPropsInterface>(
    ({ children, ...rest }: HeadingPropsInterface, ref) => {
        return (
            <Heading3Root ref={ref} {...rest}>
                {children}
            </Heading3Root>
        )
    }
)

export default Heading3
