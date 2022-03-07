import React from 'react'

import FormRoot from '../Root'

import { InputInput } from './styles'
import { InputPropsInterface } from './types'

const Input = ({ type, label, fullWidth, ...props }: InputPropsInterface) => {
    return (
        <FormRoot label={label} fullWidth={fullWidth}>
            <InputInput type={type} {...props} />
        </FormRoot>
    )
}

export default Input
