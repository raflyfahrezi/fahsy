import React, { forwardRef } from 'react'

import { ButtonRoot } from './styles'
import { ButtonPropsInterface } from './types'

const Button = forwardRef<HTMLButtonElement, ButtonPropsInterface>(
    ({ children, fullWidth, ...rest }: ButtonPropsInterface, ref) => {
        return (
            <ButtonRoot ref={ref} fullWidth={fullWidth} {...rest}>
                {children}
            </ButtonRoot>
        )
    }
)

export default Button
