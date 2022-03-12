import React, { forwardRef } from 'react'

import Label from '../Label'

import { FormRootRoot } from './styles'
import { FormRootPropsInterface } from './types'

const FormRoot = forwardRef<HTMLDivElement, FormRootPropsInterface>(
    ({ label, children, fullWidth }: FormRootPropsInterface, ref) => {
        return (
            <FormRootRoot ref={ref} fullWidth={fullWidth}>
                {label && <Label>{label}</Label>}
                <>{children}</>
            </FormRootRoot>
        )
    }
)

export default FormRoot
