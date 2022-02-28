import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from './index'

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})

Primary.args = {
    type: 'number',
    label: 'Username',
    placeholder: 'Some placeholder here',
}

export default {
    title: 'Form/Input',
    component: Input,
    args: {
        fullWidth: false,
    },
    argTypes: {
        children: { control: false },
        placeholder: { control: { type: 'text' } },
        fullWidth: { control: { type: 'boolean' } },
    },
} as ComponentMeta<typeof Input>
