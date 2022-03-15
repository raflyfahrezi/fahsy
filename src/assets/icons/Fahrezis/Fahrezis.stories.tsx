import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { colors } from '@/theme'

import Fahrezis from './index'

const Template: ComponentStory<typeof Fahrezis> = () => (
    <div style={{ maxWidth: '100px' }}>
        <Fahrezis />
    </div>
)

export const Primary = Template.bind({})

Primary.args = {}

export default {
    title: 'Assets/Fahrezis',
    component: Fahrezis,
    args: {
        color: colors.primary.yellow,
    },
    argTypes: {},
} as ComponentMeta<typeof Fahrezis>
