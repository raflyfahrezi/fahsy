import { addDecorator } from '@storybook/react'

import { Background, DefaultStyles } from '../src/styles'

addDecorator((story) => {
    return (
        <>
            <DefaultStyles />
            <Background>{story()}</Background>
        </>
    )
})

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
