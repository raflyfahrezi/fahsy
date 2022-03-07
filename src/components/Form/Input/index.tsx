import React from 'react'

import FormRoot from '../Root'

import { InputRoot } from './styles'
import { InputPropsInterface } from './types'

const Input = ({ type, label, fullWidth, ...props }: InputPropsInterface) => {
    return (
        <FormRoot label={label} fullWidth={fullWidth}>
            <InputRoot type={type} {...props} />
        </FormRoot>
    )
}

export default Input
