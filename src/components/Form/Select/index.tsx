import React from 'react'

import { SelectPropsInterface } from './types'

const Select = ({ children, ...props }: SelectPropsInterface) => {
    return <select {...props}>{children}</select>
}

export default Select
