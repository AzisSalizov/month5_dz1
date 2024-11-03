import React from 'react';
import {useSelector} from "react-redux";
import ControlsPage from "./ControlsPage";
import ResetButton from "../components/resetButton/ResetButton";

const MainPage = () => {
    const counterValue = useSelector(state => state.counter.value);
    return (
        <div>
            <h1>Counter: {counterValue}</h1>
            <ControlsPage/>
            <ResetButton/>
        </div>
    );
};

export default MainPage;
