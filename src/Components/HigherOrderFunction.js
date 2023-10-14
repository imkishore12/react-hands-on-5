import React from 'react';

function HigherOrderFunction(props) {
    return (
        <div>
            <h1>example</h1>
            <p>as it is received argument of component that we passed in the parent component</p>
            <props.value />
            
        </div>
    );
}

export default HigherOrderFunction;