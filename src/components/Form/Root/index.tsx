import React from 'react'

import Label from '../Label'

import { FormRootRoot } from './styles'
import { FormRootPropsInterface } from './types'

const FormRoot = ({ label, children, fullWidth }: FormRootPropsInterface) => {
    return (
        <FormRootRoot fullWidth={fullWidth}>
            {label && <Label>{label}</Label>}
            <>{children}</>
        </FormRootRoot>
    )
}

export default FormRoot
