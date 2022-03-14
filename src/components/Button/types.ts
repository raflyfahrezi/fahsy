import { HTMLAttributes } from 'react'

// Type
export type ButtonVariantType =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'affirmative'
    | 'danger'

// Styles
export type ButtonRootStyles = {
    fullWidth?: boolean
    variant?: ButtonVariantType
}

// Interface
export interface ButtonPropsInterface
    extends HTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean
    variant?: ButtonVariantType
}
