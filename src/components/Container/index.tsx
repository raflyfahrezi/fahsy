import React, { forwardRef } from 'react'

import { ContainerRoot } from './styles'
import { ContainerPropsInterface, ContainerSize } from './types'

const Container = forwardRef<HTMLDivElement, ContainerPropsInterface>(
    ({ size, children, ...props }: ContainerPropsInterface, ref) => {
        const getSize = (): string => {
            switch (size) {
                case 'xs':
                    return ContainerSize.xs

                case 'sm':
                    return ContainerSize.sm

                case 'md':
                    return ContainerSize.md

                case 'lg':
                    return ContainerSize.lg

                case 'full':
                    return ContainerSize.full
            }
        }

        return (
            <ContainerRoot ref={ref} size={getSize} {...props}>
                {children}
            </ContainerRoot>
        )
    }
)

export default Container
