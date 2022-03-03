import styled from '@emotion/styled'

import { font, common } from '@/theme'

import { InputRootStyles } from './types'

export const InputRoot = styled.div<InputRootStyles>`
    width: 100%;
    max-width: ${(props) => (props.fullWidth ? 'none' : '250px')};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const InputLabel = styled.label`
    font-size: ${font.size[16]};

    margin-bottom: 6px;
`

export const InputInput = styled.input`
    width: 100%;

    padding: 12px;

    font-size: ${font.size[16]};

    border-radius: ${common.borderRadius};

    outline: none;
`
