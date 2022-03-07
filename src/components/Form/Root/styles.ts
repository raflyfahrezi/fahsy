import styled from '@emotion/styled'

import { FormRootRootStyles } from './types'

export const FormRootRoot = styled.div<FormRootRootStyles>`
    width: 100%;
    max-width: ${(props) => (props.fullWidth ? 'none' : '250px')};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
