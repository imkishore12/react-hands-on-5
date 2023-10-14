import React, { useState } from 'react';
import HigherOrderFunction from './HigherOrderFunction';


function HOC1(props) {
    const [count,setCount]=useState(0)
    return (
        <div>
            <h1>HigherOrderFunction</h1>
            <p>In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.</p>
            <h1>count:{count}</h1>
            <div style={{display:'flex',justifyContent:'center',gap:'20px'}}>
                <button onClick={()=>{setCount(count+1)}}>increment</button>
                <button onClick={()=>{setCount(count-1)}}>Decrement</button>
                </div>
              

        </div>
    );
}

export default HOC1;