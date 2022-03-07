import React from 'react'

import Label from '../Label'

import { InputPropsInterface } from './types'
import { InputRoot, InputInput } from './styles'

const Input = ({ type, label, fullWidth, ...props }: InputPropsInterface) => {
    return (
        <InputRoot fullWidth={fullWidth}>
            {label && <Label>{label}</Label>}
            <InputInput type={type} {...props} />
        </InputRoot>
    )
}

export default Input
