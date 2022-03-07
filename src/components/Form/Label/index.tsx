import React from 'react'

import { LabelRoot } from './styles'
import { LabelPropsInterface } from './types'

const Label = ({ children }: LabelPropsInterface) => {
    return <LabelRoot>{children}</LabelRoot>
}

export default Label
