import React from 'react';
import {useDispatch} from "react-redux";

const ResetButton = () => {
    const dispatch = useDispatch();

    const resetCounter = () => {
        dispatch({type: 'RESET'});
    }
    return (
        <button onClick={resetCounter}>Reset</button>
    );
};

export default ResetButton;