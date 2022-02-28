import React from 'react'
import { render } from '@testing-library/react'

import Input from '.'

describe('Input Testing', () => {
    test('Input should render', () => {
        render(<Input type='month' label='Username' fullWidth />)
    })
})
