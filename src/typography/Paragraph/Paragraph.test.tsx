import React from 'react'
import { render } from '@testing-library/react'

import Paragraph from '.'

describe('Paragraph Testing', () => {
    test('Paragraph should render', () => {
        render(<Paragraph>Hello World</Paragraph>)
    })
})
