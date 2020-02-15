import React, { useState, useContext } from 'react';
import WidgetContext from '../store/WidjetContext';
import { PersonActionTypes } from '../store/reducer/persons';



const PersonsBtn: React.FC = () => {

    const { persons, setPersons } = useContext(WidgetContext)

    const arr = Array.from({ length: 6 }, (_, index) => index);
    return (
        <select value={persons} onChange={(e)=> setPersons({
            type: PersonActionTypes.set_person,
            payload: e.target.value
            })}>
            {arr.map((elem) => {
                return (
                    <option value={elem} key={elem}>
                        {elem}
                    </option>
                )
            })}
        </select>
    )

};

export default PersonsBtn;