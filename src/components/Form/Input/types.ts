import { HTMLAttributes, HTMLInputTypeAttribute } from 'react'

// Styles
export type InputRootStyles = {
    fullWidth?: boolean
}

// Interface
export interface InputPropsInterface
    extends Omit<HTMLAttributes<HTMLInputElement>, 'children'> {
    label?: string
    fullWidth?: boolean
    type?: HTMLInputTypeAttribute
}
