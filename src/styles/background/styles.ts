import styled from '@emotion/styled'

import { common, colors } from '@/theme'

export const BackgroundRoot = styled.div`
    width: 100%;
    height: 100vh;

    padding: 10px;

    border-radius: ${common.borderRadius};

    background-color: ${colors.primary.black};
`
