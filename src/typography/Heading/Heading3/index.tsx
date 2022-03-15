import React, { forwardRef } from 'react'

import { HeadingPropsInterface } from '../types'

const Heading3 = forwardRef<HTMLHeadingElement, HeadingPropsInterface>(
    ({ children, ...rest }: HeadingPropsInterface, ref) => {
        return (
            <h3 ref={ref} {...rest}>
                {children}
            </h3>
        )
    }
)

export default Heading3
