export type PointAction = {type: 'set_dep', paylaod: string} | {type: 'set_arr', payload: string};

export type DepArrState = {
    dep_city: string,
    arr_city: string
}

const depArrPointReducer = (state: DepArrState, action: PointAction) : DepArrState => {
    switch (action.type) {
        case 'set_dep':
            return {
                ...state,
                dep_city: action.paylaod 
            };
        case 'set_arr':
            return {
                ...state,
                arr_city: action.payload
            }
        default:
            return state;
    }
};

export default depArrPointReducer;