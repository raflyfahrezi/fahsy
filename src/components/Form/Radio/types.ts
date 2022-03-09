import { HTMLAttributes } from 'react'

// Type
export type RadioDirectionsType = 'row' | 'col'

export type RadioOptionsType = {
    label: string
    value: string
    isSelected: boolean
}

// Styles
export type RadioRootStyles = {
    direction?: RadioDirectionsType
}

// Interfaces
export interface RadioPropsInterface extends HTMLAttributes<HTMLInputElement> {
    name: string
    label?: string
    fullWidth?: boolean
    options: RadioOptionsType[]
    direction?: RadioDirectionsType
}
