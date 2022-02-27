import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './index'

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
    children: <p>Hello World</p>,
}

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        fullWidth: false,
    },
    argTypes: {
        fullWidth: { control: { type: 'boolean' } },
        children: { control: false },
    },
} as ComponentMeta<typeof Button>
