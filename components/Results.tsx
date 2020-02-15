import React, { useContext } from 'react';
import WidgetContext from '../store/WidjetContext';

export default () => {
    const {persons, transportType } = useContext(WidgetContext);
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
        </>
    )
}