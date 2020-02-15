import React, { useEffect } from 'react';
import SecondStore from '../store/SecondStore';
import DataSetter from '../components/DataSetter';
import Widjet from '../components/Widget';
import Results from '../components/Results';
import  Link  from 'next/link';

type Props = {}

const Second = (props) => {
    useEffect(() => {

    }, [])
    return (
        <SecondStore>
            <Link href="/"> 
                <a>Main</a>
            </Link>
            <div>
                <DataSetter
                    arrCity={props.arr}
                    depCity={props.dep}
                />
                Im a second page
                <Widjet
                    isPoints
                />
                <Results />
            </div>
        </SecondStore>

    )
};


Second.getInitialProps = async () => {
    return {
        dep: 'Taganrog',
        arr: 'Rostov'
    }
}
export default Second;