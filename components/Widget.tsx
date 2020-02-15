import React from 'react';
import PersonsBtn from './PersonsBtn';
import TransportBtn from './TransportBtn';

type Props = {
    isPersons?: boolean,
    bus?: boolean,
    bahn?: boolean
    isPoints?: boolean,
}

const Widjet: React.FC<Props> = (props) => {

    const personsW = props.isPersons && <PersonsBtn />
    const transportWBus = props.bus && <TransportBtn
        type="bus"
    />
    const transportWBahn = props.bahn && <TransportBtn
        type="bahn"
    />

    return (
        <>
            <h1>Hello im a widget</h1>
            {personsW}
            {transportWBus}
            {transportWBahn}
        </>
    )
};

export default Widjet;