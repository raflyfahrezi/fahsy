import { addDecorator } from '@storybook/react'

import { DefaultStyles } from '../src/styles'

addDecorator((story) => {
    return (
        <>
            <DefaultStyles />
            {story()}
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
