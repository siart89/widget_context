import React, { useContext } from 'react';
import WidgetContext from '../store/WidjetContext';

const PointInputs: React.FC = () => {
    const { points, setPoints } = useContext(WidgetContext);

    return (
        <form>
            <input
                type="text"
                value={points.dep_city}
                onChange={(e) => setPoints({ type: 'set_dep', payload: e.target.value })} 
                />
            <input 
            type="text" 
            value={points.arr_city} 
            onChange={(e) => setPoints({ type: 'set_arr', payload: e.target.value })} 
            />
        </form>
    )
};

export default PointInputs;