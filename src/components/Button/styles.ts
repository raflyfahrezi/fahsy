import styled from '@emotion/styled'

import { font, colors } from '@/theme'

import { ButtonRootStyles } from './types'

export const ButtonRoot = styled.button<ButtonRootStyles>`
    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
    min-width: 120px;

    background-color: ${colors.primary.yellow};

    padding: 12px 20px;

    border: none;
    border-radius: 6px;

    outline: none;

    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

    font-weight: bold;
    font-size: ${font.size[16]};
    font-family: ${font.family};

    transition: all 0.3s;
`
