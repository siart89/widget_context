import { createContext } from 'react';
import { Action } from './reducer/persons';
import { TransportAction } from './reducer/transports';
import { DepArrState, PointAction } from './reducer/depArrPoint';

type InitState = {
    persons?: string
    setPersons?: ({}: Action) => void,
    points?: {
        dep_city: string,
        arr_city: string
    }, 
    setPoints?:({}: PointAction) => void,
    transportType?: String[],
    setTransportType?: ({}: TransportAction) => void
}

const WidgetContext = createContext<InitState | undefined>(undefined);

export default WidgetContext;