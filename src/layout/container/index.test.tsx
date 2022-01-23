import React from 'react'
import { render } from '@testing-library/react'

import Container from '.'

describe('Button Testing', () => {
    test('Button should render', () => {
        render(<Container>Hello World</Container>)
    })
})
