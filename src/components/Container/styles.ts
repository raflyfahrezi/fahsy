import styled from '@emotion/styled'

import { common } from '@/theme'

import { ContainerRootStylesProps } from './types'

export const ContainerRoot = styled.div`
    width: 100%;

    padding: 0 80px;

    @media (max-width: ${common.phoneBreakpoints}) {
        padding: 0 30px;
    }
`

export const ContainerContent = styled.div<ContainerRootStylesProps>`
    width: 100%;
    max-width: ${(props) => props.size};

    margin: 0 auto;
`
