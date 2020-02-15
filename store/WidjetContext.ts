import { createContext } from 'react';
import { Action } from './reducer/persons';
import { TransportAction } from './reducer/transports';
import { DepArrState, PointAction } from './reducer/depArrPoint';

type InitState = {
    persons: string
    setPersons: any,
    points: {
        dep_city: string,
        arr_city: string
    }, 
    setPoints:({}: PointAction) => any,
    transportType: String[],
    setTransportType: ({}: TransportAction) => any
}

const WidgetContext = createContext<Partial<InitState>>({});

export default WidgetContext;