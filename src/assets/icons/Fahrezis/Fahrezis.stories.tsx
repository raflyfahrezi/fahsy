import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Fahrezis from './index'

const Template: ComponentStory<typeof Fahrezis> = (args) => (
    <div style={{ maxWidth: '100px' }}>
        <Fahrezis {...args} />
    </div>
)

export const Grey = Template.bind({})
export const Yellow = Template.bind({})

Grey.args = {
    type: 'gray',
}

Yellow.args = {
    type: 'yellow',
}

export default {
    title: 'Assets/Fahrezis',
    component: Fahrezis,
    args: {
        type: 'gray',
    },
    argTypes: {
        type: {
            options: ['gray', 'yellow'],
            control: { type: 'select' },
        },
    },
} as ComponentMeta<typeof Fahrezis>
