import styled from '@emotion/styled'

import { font, colors } from '@/theme'

import { ButtonRootStyles } from './types'

export const ButtonRoot = styled['button']<ButtonRootStyles>`
    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
    min-width: 120px;

    background-color: ${colors.yellow};

    padding: 16px 20px;

    border: none;
    border-radius: 6px;

    outline: none;

    cursor: pointer;

    font-weight: bold;
    font-size: ${font.size[16]};
`
