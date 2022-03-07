import styled from '@emotion/styled'

import { form } from '@/theme'

export const InputRoot = styled.input`
    width: 100%;

    padding: ${form.padding};

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
