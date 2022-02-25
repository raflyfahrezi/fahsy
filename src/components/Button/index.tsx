import styled from '@emotion/styled'
import React, { forwardRef } from 'react'

import { ButtonProps } from './types'

const StyledButton = styled['button']`
    padding: 20px;
`

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, ...rest }: ButtonProps, ref) => {
        return (
            <StyledButton ref={ref} {...rest}>
                {children}
            </StyledButton>
        )
    }
)

export default Button
