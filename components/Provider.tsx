import React, { useContext } from 'react';
import styled from 'styled-components';
import { Transports } from './mooks';
import { InfoContext } from '../pages';

type Props = {
    type: Transports
}

const Provider: React.FC<Props> = (props) => {
    const [state, dispatch] = useContext(InfoContext);
    

    return (
        <StyledWrapper>
            {props.type}
        </StyledWrapper>
    );
};

type StylesProps = {

};

const StyledWrapper = styled.div<StylesProps>`
    max-width: 139px;
    padding: 7px 12px;
    border: 1px solid gray;
    border-radius: 9px;
    cursor: pointer;
    background-color: #fff;
`;

export default Provider;