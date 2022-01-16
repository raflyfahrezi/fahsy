import React from 'react'

import { ButtonProps } from './types'

const Button = ({ children, ...rest }: ButtonProps) => {
    return (
        <button {...rest}>
            <p>{children}</p>
        </button>
    )
}

export default Button
