import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';


export default function MyStore() {
    const [inputItem, setInputItem] = useState(0);
    let dispatch = useDispatch();
    return (
        <>
            <h2>Protein Powder</h2>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <input type='text' placeholder="X Items" onChange={(e) => { setInputItem(parseInt(e.target.value)) }} />
                <button onClick={() => dispatch(incrementByAmount(inputItem))}>Add X Items</button>
            </div>
        </>
    )
}
