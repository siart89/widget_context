import React, {useState, useCallback, useEffect} from 'react';

const useFetch = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [err, setErr] = useState(null);

    const fetching = useCallback(async () => {
        try {
            setLoading(true);
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await resp.json()
            console.log(result);
            
            setData(result);
            setLoading(false);
        } catch(e) {
            setErr(`Error => ${e.message}`)
        }
    }, [])

    useEffect(() => {
        fetching();
    }, [])

    return {
        loading,
        data,
        err
    }
};

export default useFetch;