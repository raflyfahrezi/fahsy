import styled from '@emotion/styled'

import { colors } from '@/theme'

import { ButtonRootStyles } from './types'

export const ButtonRoot = styled['button']<ButtonRootStyles>`
    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};

    background-color: ${colors.yellow};

    padding: 0 16px;

    border: none;
    border-radius: 6px;

    outline: none;

    & > p {
        font-weight: bold;
    }
`
