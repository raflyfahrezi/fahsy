import React, { forwardRef } from 'react'

import { ButtonProps } from './types'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, ...rest }: ButtonProps, ref) => {
        return (
            <button ref={ref} {...rest}>
                {children}
            </button>
        )
    }
)

export default Button
