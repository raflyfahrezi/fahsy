import React, { forwardRef } from 'react'

import FormRoot from '../Root'

import { SelectRoot } from './styles'
import { SelectPropsInterface } from './types'

const Select = forwardRef<HTMLDivElement, SelectPropsInterface>(
    ({ label, fullWidth, children, ...props }: SelectPropsInterface, ref) => {
        return (
            <FormRoot ref={ref} label={label} fullWidth={fullWidth}>
                <SelectRoot {...props}>{children}</SelectRoot>
            </FormRoot>
        )
    }
)

export default Select
