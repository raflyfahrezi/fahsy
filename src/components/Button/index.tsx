import React, { forwardRef } from 'react'

import { ButtonRoot } from './styles'
import { ButtonPropsInterface } from './types'

const Button = forwardRef<HTMLButtonElement, ButtonPropsInterface>(
    ({ variant, children, fullWidth, ...rest }: ButtonPropsInterface, ref) => {
        return (
            <ButtonRoot
                ref={ref}
                variant={variant}
                fullWidth={fullWidth}
                {...rest}
            >
                {children}
            </ButtonRoot>
        )
    }
)

Button.defaultProps = {
    variant: 'primary',
}

export default Button
