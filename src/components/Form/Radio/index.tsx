import React from 'react'

import FormRoot from '../Root'

import { RadioPropsInterface } from './types'
import { RadioRoot, RadioInput, RadioLabel, RadioBullet } from './styles'

const Radio = ({
    name,
    label,
    options,
    fullWidth,
    direction,
    ...props
}: RadioPropsInterface) => {
    return (
        <FormRoot label={label} fullWidth={fullWidth}>
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

export default Radio
