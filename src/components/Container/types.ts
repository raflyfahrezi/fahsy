import { ReactNode, HTMLAttributes } from 'react'

// Initialization
export type ContainerSizeType = 'xs' | 'sm' | 'md' | 'lg'

export type ContainerSizePixelType = '480px' | '768px' | '1024px' | '1200px'

// Model
export type ContainerSizeModel = Record<
    ContainerSizeType,
    ContainerSizePixelType
>

// Variable
export const ContainerSize: ContainerSizeModel = {
    xs: '480px',
    sm: '768px',
    md: '1024px',
    lg: '1200px',
}

// Styles
export type ContainerRootStylesProps = {
    size: () => string
}

// Interface
export interface ContainerPropsInterface
    extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    size: ContainerSizeType
}
