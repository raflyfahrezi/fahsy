import React from 'react'
import styled from '@emotion/styled'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { colors } from '@/theme'

import Container from './index'

const Template: ComponentStory<typeof Container> = (args) => (
    <Container {...args} />
)

const Paragraph = styled.p`
    color: ${colors.tertiary.subtleGrey};
`

export const ExtraSmall = Template.bind({})
export const Small = Template.bind({})
export const Medium = Template.bind({})
export const Large = Template.bind({})
export const Full = Template.bind({})

ExtraSmall.args = {
    size: 'xs',
    children: <Paragraph>Hello World</Paragraph>,
}

Small.args = {
    size: 'sm',
    children: <Paragraph>Hello World</Paragraph>,
}

Medium.args = {
    size: 'md',
    children: <Paragraph>Hello World</Paragraph>,
}

Large.args = {
    size: 'lg',
    children: <Paragraph>Hello World</Paragraph>,
}

Full.args = {
    size: 'full',
    children: <Paragraph>Hello World</Paragraph>,
}

export default {
    title: 'Components/Container',
    component: Container,
    parameters: {
        controls: { disabled: true },
    },
} as ComponentMeta<typeof Container>
