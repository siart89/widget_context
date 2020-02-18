import React, { useState } from 'react';
import Link from 'next/link';
import MainStore from '../store/MainStore';
import PersonsBtn from '../components/PersonsBtn';
import Results from '../components/Results';
import Widjet from '../components/Widget';
import MapData from '../components/MapData';
import AnimaComponent from '../components/AnimaComponent';

const Main: React.FC = () => {
    const [show, setShow] = useState(false);
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

            <div>
                <MapData />
            </div>
            <div>
                <button onClick={() => setShow(!show)}>
                    Show anima
                </button>

                <AnimaComponent
                    isOpen={show}
                   
                />

            </div>
        </MainStore>

    )
};

export default Main;