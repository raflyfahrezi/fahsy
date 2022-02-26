import React from 'react'

import { ContainerRoot } from './styles'
import { ContainerPropsInterface, ContainerSize } from './types'

const Container = ({ size, children, ...props }: ContainerPropsInterface) => {
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
        }
    }

    return (
        <ContainerRoot size={getSize} {...props}>
            {children}
        </ContainerRoot>
    )
}

export default Container
