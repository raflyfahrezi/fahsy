import { ReactNode, HTMLAttributes } from 'react'

// Type
export type ContainerSizeType = 'xs' | 'sm' | 'md' | 'lg'

// Styles
export type ContainerRootStylesProps = {
    size: () => string
}

// Interface
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    size: ContainerSizeType
}
