import styled from '@emotion/styled'

import { ContainerRootStylesProps } from './types'

export const ContainerRoot = styled['div']<ContainerRootStylesProps>`
    width: 100%;
    max-width: ${(props) => props.size};

    margin: 0 auto;
`
