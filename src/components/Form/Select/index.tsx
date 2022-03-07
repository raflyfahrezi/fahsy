import React from 'react'

import FormRoot from '../Root'

import { SelectRoot } from './styles'
import { SelectPropsInterface } from './types'

const Select = ({
    label,
    fullWidth,
    children,
    ...props
}: SelectPropsInterface) => {
    return (
        <FormRoot label={label} fullWidth={fullWidth}>
            <SelectRoot {...props}>{children}</SelectRoot>
        </FormRoot>
    )
}

export default Select
