import { ReactNode } from 'react'

// Styles
export type FormRootRootStyles = {
    fullWidth?: boolean
}

// Interface
export interface FormRootPropsInterface {
    label?: string
    children: ReactNode
    fullWidth?: boolean
}
