import React, { forwardRef } from 'react'

import FormRoot from '../Root'

import { InputRoot } from './styles'
import { InputPropsInterface } from './types'

const Input = forwardRef<HTMLDivElement, InputPropsInterface>(
    ({ type, label, fullWidth, ...props }: InputPropsInterface, ref) => {
        return (
            <FormRoot ref={ref} label={label} fullWidth={fullWidth}>
                <InputRoot type={type} {...props} />
            </FormRoot>
        )
    }
)

export default Input
