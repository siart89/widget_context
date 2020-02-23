import React, { ReactComponentElement, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
    children: {
        Header: ReactNode,
        Content: ReactNode,
    }
}

const Combainer:React.FC<Props> = (props) => {

    const {
        Header,
        Content
    } = props.children;

    return (
        <StyledWrapper>
            
            <div className="combainer-col">
                <h1>Header Hear</h1>
               {Header}
            </div>
            <div className="combainer-col">
                <h1>Content Here</h1>
               {Content}
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    display: flex;
`;

export default Combainer;