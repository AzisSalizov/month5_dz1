const initialState = {
    counter: {value: 0}
};

export default function reducer(state = initialState, action) {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            counter: {value: state.counter.value + action.payload}
        };
    } else if (action.type === 'DECREMENT') {
        return {
            ...state,
            counter: {value: Math.max(0, state.counter.value - action.payload)}
        };
    } else if (action.type === 'RESET') {
        return {
            ...state,
            counter: {value: 0}
        };
    } else {
        return state;
    }
}
