import React from 'react';
import MainStore from '../store/MainStore';
import PersonsBtn from '../components/PersonsBtn';
import Results from '../components/Results';
import Widjet from '../components/Widget';

const Main: React.FC = () => {
    return (
        <MainStore>
            <Widjet 
                isPersons
                bus
                bahn
            />
            <Results />
        </MainStore>

    )
};

export default Main;