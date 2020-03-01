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

    return (
        <StyledWrapper>
            <div className="provider-box">
                {
                    transport.map((item, index) => {
                        let selected = state.selectedTransport === item.type;
                        if (state.selectedTransport === null) {
                            return (
                                <Provider
                                    key={index}
                                    type={item.type}
                                    selected={selected}
                                />
                            )
                        };
                        if ((state.selectedTransport !== null) && state.selectedTransport === item.type) {
                            return (
                                <Provider
                                    key={index}
                                    type={item.type}
                                    selected={selected}
                                />
                            )
                        };
                        return null;
                    })
                }
            </div>
            <div className="lines-box">
                {
                    line.map((item, index) => {

                        const selected = state.line?.includes(item.line) ?? false;

                        if ((state.selectedTransport !== null) && state.selectedTransport === item.provider) {
                            return (
                                <Lines
                                    key={index}
                                    line={item.line}
                                    selected={selected}
                                    provider={item.provider}
                                />
                            )
                        }
                        if (state.selectedTransport === null) {
                            return (
                                <Lines
                                    key={index}
                                    line={item.line}
                                    selected={selected}
                                    provider={item.provider}
                                />
                            )
                        };
                        return null;
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