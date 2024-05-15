import React from 'react';
import { useSelector } from 'react-redux';


export default function Navbar() {
    let cartCounter = useSelector((state: any) => state.counter.value);
    return (
        <div className='navbar'>
            <h2 className='cart-container'>Number of items in the Cart: {cartCounter}</h2>
        </div>
    )
}
