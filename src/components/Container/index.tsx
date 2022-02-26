import React from 'react'

import { ContainerRoot } from './styles'
import { ContainerProps } from './types'

const Container = ({ size, children, ...props }: ContainerProps) => {
    const getSize = (): string => {
        switch (size) {
            case 'xs':
                return '480px'

            case 'sm':
                return '768px'

            case 'md':
                return '1024px'

            case 'lg':
                return '1200px'

            default:
                return '1024px'
        }
    }

    return (
        <ContainerRoot size={getSize} {...props}>
            {children}
        </ContainerRoot>
    )
}

export default Container
