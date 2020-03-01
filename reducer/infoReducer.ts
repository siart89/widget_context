import { Transports } from "../components/mooks";

export type Lines = {
    line: string,
}

export type InitState = {
    selectedTransport: null | Transports,
    line: null | string[],
};

export type Actions =
    | { type: 'set_transport', transport: Transports }
    | { type: 'set_default' }
    | { type: 'set_line', provider: Transports, line: string }
    | { type: 'remove_line', line: string };

export const reducer = (state: InitState, action: Actions): InitState => {
    switch (action.type) {
        case "set_default":
            return {
                line: null,
                selectedTransport: null
            };
        case "set_transport":
            return {
                ...state,
                selectedTransport: action.transport
            };
        case "set_line":{
            let newState;
            if (state.line !== null) {
                newState = state.line.concat(action.line)
            } else {
                newState = [action.line]
            }
            return {
                selectedTransport: action.provider,
                line: newState
            };
        }
        case "remove_line":
            if (state.line.length === 1) {
                return {
                    selectedTransport: null,
                    line: null,
                }
            }
            return {
                ...state,
                line: state.line.filter((item) => item !== action.line)
            };
        default:
            return state;
    }
};

type Options = {
    selectedTransport?:Transports,
    line?: string[],
}

export const getInitialState = (options: Options): InitState => {
    const {
        line = null,
        selectedTransport = null
    } = options;
    return {
        line,
        selectedTransport
    }
};