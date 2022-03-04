import styled from '@emotion/styled'

import { font, colors, common } from '@/theme'

import { InputRootStyles } from './types'

export const InputRoot = styled.div<InputRootStyles>`
    width: 100%;
    max-width: ${(props) => (props.fullWidth ? 'none' : '250px')};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const InputLabel = styled.label`
    font-weight: bold;
    font-size: ${font.size[16]};
    font-family: ${font.family};

    color: ${colors.tertiary.subtleGrey};

    margin-bottom: 10px;
`

export const InputInput = styled.input`
    width: 100%;

    padding: 10px 12px;

    color: ${colors.tertiary.subtleGrey};

    font-size: ${font.size[16]};
    font-family: ${font.family};

    border-radius: ${common.borderRadius};
    border: 2px solid ${colors.tertiary.grey};

    background-color: ${colors.primary.subtleBlack};

    outline: none;

    transition: all 0.2s;

    &:focus {
        border: 2px solid ${colors.primary.yellow};
    }
`
