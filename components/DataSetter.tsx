import React, { useEffect, useContext } from 'react';
import WidgetContext from '../store/WidjetContext';

type Props = {
    depCity: string,
    arrCity: string
}

const DataSetter: React.FC<Props> = (props) => {
    
    const { setPoints } = useContext(WidgetContext);

    useEffect(() => {
        setPoints({type: 'set_arr', payload: props.arrCity})
        setPoints({type: 'set_dep', payload: props.depCity})
    }, [])

    return null
};

export default DataSetter;