import React from 'react';
import Link from 'next/link';
import MainStore from '../store/MainStore';
import PersonsBtn from '../components/PersonsBtn';
import Results from '../components/Results';
import Widjet from '../components/Widget';

const Main: React.FC = () => {
    return (
        <MainStore>
            <Link href="/second">
                <a>
                    Second
                </a>
            </Link>
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