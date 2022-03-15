import React, { forwardRef } from 'react'

import { HeadingPropsInterface } from '../types'

const Heading1 = forwardRef<HTMLHeadingElement, HeadingPropsInterface>(
    ({ children, ...rest }: HeadingPropsInterface, ref) => {
        return (
            <h1 ref={ref} {...rest}>
                {children}
            </h1>
        )
    }
)

export default Heading1
