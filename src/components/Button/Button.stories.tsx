import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './index'

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
export const Secondary = Template.bind({})

Primary.args = {
    children: <p>Button</p>,
}

Secondary.args = {
    variant: 'secondary',
    children: <p>Button</p>,
}

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        disabled: false,
        fullWidth: false,
    },
    argTypes: {
        variant: { control: false },
        children: { control: false },
        disabled: { control: { type: 'boolean' } },
        fullWidth: { control: { type: 'boolean' } },
    },
} as ComponentMeta<typeof Button>
