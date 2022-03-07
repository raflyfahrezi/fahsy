import { HTMLAttributes } from 'react'

// Interface
export interface SelectPropsInterface
    extends HTMLAttributes<HTMLSelectElement> {
    label?: string
    fullWidth?: boolean
}
