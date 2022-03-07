import styled from '@emotion/styled'

import { form, font, colors } from '@/theme'

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

    color: ${form.color};

    font-size: ${form.fontSize};
    font-family: ${form.fontFamily};

    border: ${form.border};
    border-radius: ${form.borderRadius};

    background-color: ${form.backgroundColor};

    outline: ${form.outline};

    transition: ${form.transition};

    &:focus {
        border: ${form.borderFocus};
    }

    &::-webkit-calendar-picker-indicator {
        filter: invert(100%);
    }
`
