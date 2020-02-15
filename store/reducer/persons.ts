export enum PersonActionTypes {
    set_person = 'set_peson'
}

export type Action = {type: PersonActionTypes.set_person , payload: string};

const PersonReduser = (state: string, action: Action): string => {
    switch (action.type) {
        case "set_peson":
            return action.payload;
        default:
            return state;
    }
};

export default PersonReduser;
