import React, { useContext } from 'react';
import WidgetContext from '../store/WidjetContext';

export default () => {
    const {persons, transportType, points } = useContext(WidgetContext);
    return (
        <>
        <h1>
            persons : {persons}
        </h1>
        <h1>
            transport : {transportType.map((type, index) => {
                return (
                    <span key={index}>
                        {`${type} `}
                    </span>
                )
                })}
        </h1>
        <h1>
            depPoint: {points.dep_city}
        </h1>
        <h1>
            arrPoint: {points.arr_city}
        </h1>
        </>
    )
}