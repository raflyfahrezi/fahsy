import React from 'react'
import { render } from '@testing-library/react'

import Select from '.'

describe('Select Testing', () => {
    test('Select should render', () => {
        render(
            <Select label='University'>
                <option value='oxford'>Oxford University</option>
                <option value='harvard'>Harvard University</option>
                <option value='mit'>MIT</option>
            </Select>
        )
    })
})
