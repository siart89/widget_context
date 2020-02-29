import React, { useState, useContext } from 'react';
import styled, {css} from 'styled-components';
import { Transports } from './mooks';
import {InfoContext } from '../pages/index';

type Props = {
    line: string,
    provider: Transports,
    selected: boolean,
}

const Lines: React.FC<Props> = (props) => {

    const [state, dispatch] = useContext(InfoContext);

    const clickHandler = () => {
        if (!props.selected) {
           return dispatch({type: "set_line", provider: props.provider, line: props.line })
        } 
        return dispatch({ type: 'remove_line', line: props.line })
    };

    return (
        <StyledWrapper
            onClick={clickHandler}
            isSelect={props.selected}
        >
           {props.line}
        </StyledWrapper>
    );
};

type StylesProps = {
    isSelect: boolean
};

const StyledWrapper = styled.div<StylesProps>`
    max-width: 20px;
    height: 20px;
    padding: 2px 2px;
    border: 1px solid gray;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 5px;
    background-color: #fff;
    ${props => props.isSelect && css`
        opacity: 0.7;
    `}
`;

export default Lines;