import React from 'react';

const Cart = (cart) => {
    return (
        <div>
            <h3>Exercise Details</h3>
            <p><small>Exercise time {cart.length}seconds</small></p>
        </div>
    );
};

export default Cart;