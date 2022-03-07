import React from 'react'
import { render } from '@testing-library/react'

import Label from '.'

describe('Label Testing', () => {
    test('Label should render', () => {
        render(<Label>Username</Label>)
    })
})
