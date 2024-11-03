import React from 'react';
import {useDispatch} from "react-redux";

const ControlsPage = () => {
    const dispatch = useDispatch();

    const decrement = (amount) => {
        dispatch({
            type: 'DECREMENT',
            payload: amount
        })
    }
    const increment = (amount) => {
        dispatch({
            type: 'INCREMENT',
            payload: amount
        })
    }

    return (
        <div>
            <button onClick={() => increment(1)}>+1</button>
            <button onClick={() => decrement(1)}>-1</button>
            <button onClick={() => increment(10)}>+10</button>
            <button onClick={() => decrement(10)}>-10</button>
        </div>
    );
};

export default ControlsPage;