import React, { useReducer } from 'react';
import WidgetContext from './WidjetContext';
import PersonReduser from './reducer/persons';
import depArrPointReducer from './reducer/depArrPoint';
import transportReduser from './reducer/transports';

interface Props {

}


const MainStore: React.FC<Props> = (props) => {

    const [persons, setPersons] = useReducer(PersonReduser, '1');
    const [points, setPoints] = useReducer(depArrPointReducer, {
        dep_city: '',
        arr_city: '',
    });
    const [transportType, setTransportType] = useReducer(transportReduser, []);

    const mainStore = {
        persons,
        setPersons,
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

export default MainStore;