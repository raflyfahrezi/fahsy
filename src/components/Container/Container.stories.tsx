import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Container from './index'

const Template: ComponentStory<typeof Container> = (args) => (
    <Container {...args} />
)

export const ExtraSmall = Template.bind({})
export const Small = Template.bind({})
export const Medium = Template.bind({})
export const Large = Template.bind({})

ExtraSmall.args = {
    size: 'xs',
    children: <p>Hello World</p>,
}

Small.args = {
    size: 'sm',
    children: <p>Hello World</p>,
}

Medium.args = {
    size: 'md',
    children: <p>Hello World</p>,
}

Large.args = {
    size: 'lg',
    children: <p>Hello World</p>,
}

export default {
    title: 'Components/Container',
    component: Container,
    parameters: {
        controls: { disabled: true },
    },
} as ComponentMeta<typeof Container>
