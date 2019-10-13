import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
    padding: 0;
    height: 48px;

    &.left-item-focus {
        .left-link {
            background-color: ${props => props.color};
        }
    }
`;
const Icon = styled.span`
    color: red;
    ${ListItem}:hover & {
        color: green;
    }
`;

const CoverDefault = props => {
    return (
        <div>
            <p>继承 并修改样式</p>
            <ul>
                <ListItem>111111</ListItem>
                <ListItem><span className="left-icon">left icon</span></ListItem>
                <ListItem className="left-item-focus" color="green" >
                    <Icon>hover icon</Icon>
                    <span className="left-link">asdsadsa</span>
                </ListItem>
            </ul>
        </div>
    );
};

export default CoverDefault;
