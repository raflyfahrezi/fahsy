import { ReactNode, HTMLAttributes } from 'react'

// Initialization
export type ContainerSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'full'

export type ContainerSizePixelType =
    | '480px'
    | '768px'
    | '1024px'
    | '1200px'
    | '100%'

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
    full: '100%',
}

// Styles
export type ContainerRootStylesProps = {
    size: ContainerSizePixelType
}

// Interface
export interface ContainerPropsInterface
    extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    size: ContainerSizeType
}
