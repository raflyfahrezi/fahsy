import React from 'react'

import { InputPropsInterface } from './types'
import { InputRoot, InputLabel, InputInput } from './styles'

const Input = ({ type, label, fullWidth, ...props }: InputPropsInterface) => {
    return (
        <InputRoot fullWidth={fullWidth}>
            {label && <InputLabel>{label}</InputLabel>}
            <InputInput type={type} {...props} />
        </InputRoot>
    )
}

export default Input
