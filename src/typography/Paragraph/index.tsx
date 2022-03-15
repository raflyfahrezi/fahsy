import React, { forwardRef } from 'react'

import { ParagraphRoot } from './styles'
import { ParagraphPropsInterface } from './types'

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphPropsInterface>(
    ({ children, ...rest }: ParagraphPropsInterface, ref) => {
        return (
            <ParagraphRoot ref={ref} {...rest}>
                {children}
            </ParagraphRoot>
        )
    }
)

export default Paragraph
