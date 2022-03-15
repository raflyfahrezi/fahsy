import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Paragraph from './index'

const Template: ComponentStory<typeof Paragraph> = (args) => (
    <Paragraph {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
    children: 'This is Paragraph',
}

export default {
    title: 'Typography/Paragraph',
    component: Paragraph,
    args: {},
    argTypes: {},
} as ComponentMeta<typeof Paragraph>
