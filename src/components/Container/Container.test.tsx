import React from 'react'
import { render } from '@testing-library/react'

import Container from '.'

describe('Container Testing', () => {
    test('Container should render', () => {
        render(<Container size='md'>Hello World</Container>)
    })
})
