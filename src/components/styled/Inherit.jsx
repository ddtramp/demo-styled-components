import React from 'react'
import styled from 'styled-components'

import { Button } from 'antd'
import 'antd/dist/antd.css'

const CusButton = styled(Button)`
    background-color: red !important;
    color: #fff !important;
`
const Inherit = (props) => {
    return (
        <div>
            <p>继承 并修改样式</p>
            <CusButton>{ props.children }</CusButton>
        </div>
    )
}

export default Inherit