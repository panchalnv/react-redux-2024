import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number,
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value = state.value > 0 ? state.value - 1 : state.value;
        },
        incrementByAmount(state, action) {
            state.value += action.payload;
        },
        decrementByAmount(state, action) {
            state.value -= action.payload;
        }
    }
});

export const { 
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount
} = counterSlice.actions;

export default counterSlice.reducer;