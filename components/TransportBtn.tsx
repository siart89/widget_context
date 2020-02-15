import React, { useContext, useState } from 'react';
import WidgetContext from '../store/WidjetContext';
import { TransportAction } from '../store/reducer/transports';

type Props = {
    type: string
}

const TransportBtn: React.FC<Props> = (props) => {
    const { setTransportType } = useContext(WidgetContext);
    const [isActive, setIsActive] = useState(false)

    const onClickHandler = () => {
        setTransportType({
            type: isActive ? 'remove_transport' : 'set_transport',
            payload: props.type
        });
        setIsActive(!isActive)
    }

    return (
        <>
        <button type="button" onClick={onClickHandler}>
            {`${props.type} ${isActive ? 'X' : ''}`} 
        </button>
        </>
    )
};

export default TransportBtn;