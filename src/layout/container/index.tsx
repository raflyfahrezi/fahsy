import React, { forwardRef } from 'react'

import { ContainerPropsModel } from './types'

const Container = forwardRef<HTMLDivElement, ContainerPropsModel>(
    ({ children, ...props }: ContainerPropsModel, ref) => {
        return (
            <div ref={ref} {...props}>
                {children}
            </div>
        )
    }
)

export default Container
