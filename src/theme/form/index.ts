import font from '../font'
import colors from '../colors'
import common from '../common'

import { formType } from './types'

const form: formType = {
    padding: '12px 15px',
    color: '#C9C9C9',

    fontSize: font.size[16],
    fontFamily: font.family,

    borderRadius: common.borderRadius,
    border: `2px solid ${colors.tertiary.grey}`,
    borderFocus: `2px solid ${colors.primary.yellow}`,

    backgroundColor: colors.primary.subtleBlack,

    outline: 'none',

    transition: 'all 0.2s',
}

export default form
