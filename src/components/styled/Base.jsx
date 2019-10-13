import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: #abcdef;
  border-radius: 3px;
  border: none;
  color: white;
`;

const Base = (props) => {
    return (
        <Button>{props.children}</Button>
    )
}

export default Base