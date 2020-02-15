import React, { useReducer } from 'react';
import WidgetContext from './WidjetContext';
import depArrPointReducer from './reducer/depArrPoint';
import transportReduser from './reducer/transports';

interface Props {

}


const SecondStore: React.FC<Props> = (props) => {

    const [points, setPoints] = useReducer(depArrPointReducer, {
        dep_city: '',
        arr_city: '',
    });
    const [transportType, setTransportType] = useReducer(transportReduser, []);

    const mainStore = {
        points, 
        setPoints,
        transportType,
        setTransportType
    }

    return (
        <WidgetContext.Provider value={mainStore}>
            {props.children}
        </WidgetContext.Provider>
    )
};

export default SecondStore;