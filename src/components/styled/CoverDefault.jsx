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
    &:hover {
        .left-icon {
            color: #9e9e9e; // 500
        }
    }
`;
const CoverDefault = props => {
    return (
        <div>
            <p>继承 并修改样式</p>
            <ul>
                <ListItem>default</ListItem>
                <ListItem><span className="left-icon">hover left icon</span></ListItem>
                <ListItem className="left-item-focus" color="green" >
                    <span className="left-icon">hover left icon</span>
                    <span className="left-link">left link</span>
                </ListItem>
            </ul>
        </div>
    );
};

export default CoverDefault;
