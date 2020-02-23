import React from 'react';

const Test:React.FC<{title?:string}> = (props) => {
    return (
        <h1>{props.title ? props.title : "Hello"}</h1>
    )
}

export default Test;