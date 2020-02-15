import { createContext } from 'react';
import { Action } from './reducer/persons';
import { TransportAction } from './reducer/transports';

type InitState = {
    persons: string
    setPersons: any,
    points: {
        dep_city: string,
        arr_city: string
    }, 
    setPoints: any,
    transportType: String[],
    setTransportType: ({}: TransportAction) => any
}

const WidgetContext = createContext<Partial<InitState>>({});

export default WidgetContext;