import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import { TransportType, LineType } from './mooks';
import Provider from './Provider';
import Lines from './Lines';
import { InfoContext } from '../pages';

type Props = {
    transport: TransportType[],
    line: LineType[],
}

const Main: React.FC<Props> = (props) => {
    const {
        line,
        transport
    } = props;
    const [state] = useContext(InfoContext);

    const lines = useMemo(() => state.line?.map((item) => item.line), [state.line]);
    return (
        <StyledWrapper>
            <div className="provider-box">
                {
                    transport.map((item, index) => {
                        return (
                            <Provider
                                key={index}
                                type={item.type}
                            />
                        )
                    })
                }
            </div>
            <div className="lines-box">
                {
                    line.map((item, index) => {
                        const selected = lines?.includes(item.line) ?? false;
                        return (
                            <Lines
                                key={index}
                                line={item.line}
                                selected={selected}
                                provider={item.provider}
                            />
                        )
                    })
                }
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    display: flex;

    .provider-box {
        display: flex;
        align-items: center;
    }

    .lines-box {
        display: flex;
        align-items: center;
        margin-left: 15px;
    }
`;

export default Main;