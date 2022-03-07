import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Select from './index'

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})

Primary.args = {
    label: 'University',
    children: (
        <>
            <option value='oxford'>Oxford University</option>
            <option value='harvard'>Harvard University</option>
            <option value='mit'>MIT</option>
        </>
    ),
}

export default {
    title: 'Form/Select',
    component: Select,
    args: {
        fullWidth: false,
    },
    argTypes: {
        children: { control: false },
        fullWidth: { control: { type: 'boolean' } },
    },
} as ComponentMeta<typeof Select>
