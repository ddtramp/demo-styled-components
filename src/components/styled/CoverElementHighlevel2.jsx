import React from "react";
import styled from "styled-components";
import { Button } from 'antd'

const CustonButton = styled(Button)`
    color: red;

    & {
        color: blue;
    }
    && {
        color: green;
        background-color: blue;
    }
`

const CoverDefault = props => {
    return (
        <div>
            <p>cover element style like important</p>
            <CustonButton>style cover button</CustonButton>
        </div>
    );
};

export default CoverDefault;
