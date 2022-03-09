import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Radio from './index'

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const Primary = Template.bind({})

Primary.args = {
    name: 'gender',
    label: 'Makanan Kesukaan',
    options: [
        { label: 'Pisang', value: 'pisang', isSelected: true },
        { label: 'Apel', value: 'apel', isSelected: false },
        { label: 'Jeruk', value: 'Jeruk', isSelected: false },
        { label: 'Bakpao', value: 'Bakpao', isSelected: false },
        { label: 'Semangka', value: 'Semangka', isSelected: false },
    ],
}

export default {
    title: 'Form/Radio',
    component: Radio,
    args: {
        fullWidth: false,
    },
    argTypes: {
        children: { control: false },
        fullWidth: { control: { type: 'boolean' } },
        direction: {
            options: ['row', 'col'],
            control: { type: 'select' },
        },
    },
} as ComponentMeta<typeof Radio>
