import React, { ReactNode } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Heading1Component from './Heading1'
import Heading2Component from './Heading2'
import Heading3Component from './Heading3'

type WrapperProps = {
    children: ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
    return <div>{children}</div>
}

const Template: ComponentStory<typeof Wrapper> = (args) => <Wrapper {...args} />

export const Heading1 = Template.bind({})
export const Heading2 = Template.bind({})
export const Heading3 = Template.bind({})

Heading1.args = {
    children: <Heading1Component>This is Heading 1</Heading1Component>,
}

Heading2.args = {
    children: <Heading2Component>This is Heading 2</Heading2Component>,
}

Heading3.args = {
    children: <Heading3Component>This is Heading 3</Heading3Component>,
}

export default {
    title: 'Typography/Heading',
    component: Wrapper,
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
} as ComponentMeta<typeof Wrapper>
