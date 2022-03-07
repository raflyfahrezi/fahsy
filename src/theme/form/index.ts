import font from '../font'
import colors from '../colors'
import common from '../common'

import { formType } from './types'

const form: formType = {
    padding: '10px 12px',
    color: colors.tertiary.subtleGrey,

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
