import React, { forwardRef } from 'react'

import FormRoot from '../Root'

import { RadioPropsInterface } from './types'
import { RadioRoot, RadioInput, RadioLabel, RadioBullet } from './styles'

const Radio = forwardRef<HTMLDivElement, RadioPropsInterface>(
    (
        {
            name,
            label,
            options,
            fullWidth,
            direction,
            ...props
        }: RadioPropsInterface,
        ref
    ) => {
        return (
            <FormRoot ref={ref} label={label} fullWidth={fullWidth}>
                <RadioRoot direction={direction}>
                    {options.map((item) => {
                        return (
                            <RadioLabel>
                                <RadioInput
                                    type='radio'
                                    name={name}
                                    value={item.value}
                                    defaultChecked={item.isSelected}
                                    {...props}
                                />
                                <RadioBullet />
                                <p>{item.label}</p>
                            </RadioLabel>
                        )
                    })}
                </RadioRoot>
            </FormRoot>
        )
    }
)

export default Radio
