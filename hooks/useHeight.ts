import React, { useState, useEffect } from 'react';

const useHeight = (ref) => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
      if (ref) {
        const calcH = ref.current.getBoundingClientRect().height;
        setHeight(calcH);
      }
    }, [ref]);

    return {
      height
    }
};

export default useHeight;