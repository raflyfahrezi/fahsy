import { HTMLAttributes, HTMLInputTypeAttribute } from 'react'

// Styles
export type InputRootStyles = {
    fullWidth?: boolean
}

// Interface
export interface InputPropsInterface extends HTMLAttributes<HTMLInputElement> {
    label?: string
    fullWidth?: boolean
    type?: HTMLInputTypeAttribute
}
