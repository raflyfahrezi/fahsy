import styled from '@emotion/styled'

import { form, colors } from '@/theme'

import { RadioRootStyles } from './types'

export const RadioRoot = styled.div<RadioRootStyles>`
    width: 100%;

    display: flex;
    gap: ${(props) => (props.direction === 'col' ? '20px' : '30px')};
    flex-direction: ${(props) =>
        props.direction === 'col' ? 'column' : 'row'};
    align-items: flex-start;
`

export const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;

    position: relative;

    cursor: pointer;

    & > p {
        color: ${form.color};

        font-family: ${form.fontFamily};
    }
`

export const RadioInput = styled.input`
    position: absolute;

    opacity: 0;

    cursor: pointer;
`

export const RadioBullet = styled.div`
    width: 20px;
    height: 20px;

    border-radius: 50%;
    border: ${form.border};

    transition: ${form.transition};

    ${RadioInput}:checked + & {
        background-color: ${colors.primary.yellow};
    }
`
