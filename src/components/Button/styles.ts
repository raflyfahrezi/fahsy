import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { font, common, colors } from '@/theme'

import { ButtonRootStyles } from './types'

export const ButtonVariantPrimary = () => css`
    color: ${colors.primary.black};

    background-color: ${colors.primary.yellow};

    &:hover {
        border: 2px solid ${colors.system.yellow[4]};

        background-color: ${colors.system.yellow[4]};
    }
`

export const ButtonVariantSecondary = () => css`
    color: ${colors.primary.yellow};

    background-color: ${colors.primary.black};

    &:hover {
        background-color: ${colors.system.yellow[1]};
    }
`

export const ButtonVariantTertiary = () => css`
    color: ${colors.secondary.white};

    background-color: ${colors.primary.black};

    border: 2px solid ${colors.system.black[5]};

    &:hover {
        background-color: ${colors.system.black[5]};
    }
`

export const ButtonRoot = styled.button<ButtonRootStyles>`
    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
    min-width: 120px;

    padding: 12px 20px;

    border: 2px solid ${colors.primary.yellow};
    border-radius: ${common.borderRadius};

    outline: none;

    cursor: pointer;

    font-weight: bold;
    font-size: ${font.size[16]};
    font-family: ${font.family};

    transition: all 0.5s;

    ${(props) => props.variant === 'primary' && ButtonVariantPrimary}

    ${(props) => props.variant === 'secondary' && ButtonVariantSecondary}

    ${(props) => props.variant === 'tertiary' && ButtonVariantTertiary}

    &:disabled {
        color: #cea337;

        cursor: not-allowed;
    }
`
