import React, { forwardRef } from 'react'

import { ContainerRoot, ContainerContent } from './styles'
import {
    ContainerSize,
    ContainerSizePixelType,
    ContainerPropsInterface,
} from './types'

const Container = forwardRef<HTMLDivElement, ContainerPropsInterface>(
    ({ size, children, ...props }: ContainerPropsInterface, ref) => {
        const getSize = (): ContainerSizePixelType => {
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

                default:
                    return ContainerSize.md
            }
        }

        return (
            <ContainerRoot ref={ref}>
                <ContainerContent size={getSize()} {...props}>
                    {children}
                </ContainerContent>
            </ContainerRoot>
        )
    }
)

export default Container
