export type TransportAction = 
| { type: 'set_transport', payload: string }
| {type: 'remove_transport', payload: string}

const transportReduser = (state: string[], action: TransportAction): string[] => {
    switch (action.type) {
        case 'set_transport':
            return [...state, action.payload];
        case 'remove_transport': 
            return state.filter((item) => item !== action.payload);
        default: 
            return state;
    }
};

export default transportReduser;