import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Transports } from './mooks';
import { InfoContext } from '../pages';

type Props = {
    type: Transports,
    selected: boolean
}

const Provider: React.FC<Props> = (props) => {
    const [state, dispatch] = useContext(InfoContext);

    const clickHandler = () => {
        if (!props.selected) {
            return dispatch({ type: "set_transport", transport: props.type })
        }
        return dispatch({ type: 'set_default' })
    };

    return (
        <StyledWrapper
            onClick={clickHandler}
            selected={props.selected}>
            {props.type}
        </StyledWrapper>
    );
};

type StylesProps = {
    selected: boolean,
};

const StyledWrapper = styled.div<StylesProps>`
    max-width: 139px;
    padding: 7px 12px;
    border: 1px solid gray;
    border-radius: 9px;
    cursor: pointer;
    background-color: #fff;
    ${props => props.selected && css`
        padding-right: 25px;
        border-color: blue;
        position: relative;

        &::after {
            content: "x";
            display: block;
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
        }
    `}
`;

export default Provider;