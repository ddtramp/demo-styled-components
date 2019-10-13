import React from 'react'
import styled from 'styled-components'

import { Button } from 'antd'
import 'antd/dist/antd.css'

const CusButton = styled(Button)`
    background-color: red !important;
`

const Span = CusButton.withComponent('span')
const Inherit = (props) => {
    return (
        <div>
            <p>继承样式 改变 tag</p>
            <Span>{ props.children }</Span>
        </div>
    )
}

export default Inherit