import styled from 'styled-components'

import { colors } from '@/theme'

import { ContainerRootStylesProps } from './types'

export const ContainerRoot = styled['div']<ContainerRootStylesProps>`
    width: 100%;
    max-width: ${(props) => props.size};

    background-color: ${colors.yellow};

    margin: 0 auto;
`
