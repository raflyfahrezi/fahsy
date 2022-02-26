import React from 'react'
import { render } from '@testing-library/react'

import Container from '.'

describe('Container Testing', () => {
    test('Container size xs should render', () => {
        render(<Container size='xs'>Hello World</Container>)
    })

    test('Container size sm should render', () => {
        render(<Container size='sm'>Hello World</Container>)
    })

    test('Container size md should render', () => {
        render(<Container size='md'>Hello World</Container>)
    })

    test('Container size lg should render', () => {
        render(<Container size='lg'>Hello World</Container>)
    })
})
