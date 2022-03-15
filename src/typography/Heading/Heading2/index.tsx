import React, { forwardRef } from 'react'

import { HeadingPropsInterface } from '../types'

const Heading2 = forwardRef<HTMLHeadingElement, HeadingPropsInterface>(
    ({ children, ...rest }: HeadingPropsInterface, ref) => {
        return (
            <h2 ref={ref} {...rest}>
                {children}
            </h2>
        )
    }
)

export default Heading2
