import styled from '@emotion/styled'

import { form, colors } from '@/theme'

export const SelectRoot = styled.select`
    width: 100%;

    appearance: none;

    padding: ${form.padding};

    color: ${form.color};

    font-size: ${form.fontSize};
    font-family: ${form.fontFamily};

    border: ${form.border};
    border-radius: ${form.borderRadius};

    background-color: ${form.backgroundColor};

    outline: ${form.outline};

    transition: ${form.transition};

    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
        linear-gradient(135deg, gray 50%, transparent 50%),
        linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(100% - 18px),
        calc(100% - 15px) calc(100% - 18px);
    background-size: 5px 5px, 5px 5px, 1px 0em;
    background-repeat: no-repeat;

    &:focus {
        border: ${form.borderFocus};

        background-image: linear-gradient(
                45deg,
                transparent 50%,
                ${colors.primary.yellow} 50%
            ),
            linear-gradient(
                135deg,
                ${colors.primary.yellow} 50%,
                transparent 50%
            ),
            linear-gradient(
                to right,
                ${colors.primary.yellow},
                ${colors.primary.yellow}
            );
    }
`
