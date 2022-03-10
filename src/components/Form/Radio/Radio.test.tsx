import React from 'react'
import { render } from '@testing-library/react'

import Radio from '.'

describe('Radio Testing', () => {
    test('Radio should render', () => {
        render(
            <Radio
                name='gender'
                label='Username'
                options={[
                    {
                        label: 'm',
                        value: 'Man',
                        isSelected: false,
                    },
                    {
                        label: 'f',
                        value: 'Female',
                        isSelected: false,
                    },
                ]}
                fullWidth
            />
        )
    })
})
