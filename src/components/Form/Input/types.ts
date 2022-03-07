import { HTMLAttributes } from 'react'

// Initialization
export type InputTypeType =
    | 'button'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'

// Styles
export type InputRootStyles = {
    fullWidth?: boolean
}

// Interface
export interface InputPropsInterface
    extends Omit<HTMLAttributes<HTMLInputElement>, 'children'> {
    label?: string
    fullWidth?: boolean
    type?: InputTypeType
}
