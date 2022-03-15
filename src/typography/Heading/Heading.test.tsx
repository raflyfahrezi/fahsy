import React from 'react'
import { render } from '@testing-library/react'

import Heading1 from './Heading1'
import Heading2 from './Heading2'
import Heading3 from './Heading3'

describe('Heading Testing', () => {
    test('Heading should render', () => {
        render(
            <>
                <Heading1>Hello World</Heading1>
                <Heading2>Hello World</Heading2>
                <Heading3>Hello World</Heading3>
            </>
        )
    })
})
