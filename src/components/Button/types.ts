import { HTMLAttributes } from 'react'

// Styles
export type ButtonRootStyles = {
    fullWidth: boolean
}

// Interface
export interface ButtonPropsInterface
    extends HTMLAttributes<HTMLButtonElement> {
    fullWidth: boolean
}
