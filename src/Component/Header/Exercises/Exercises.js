import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Service from '../../Service/Service';
import './Exercises.css';
const Exercise = () => {
    const [services, setServices] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data) )
    }, []);
    const handleAddToCart = (service) =>{
        console.log(service);
        const newCart = [...cart, service];
        setCart(newCart);
     }

    return (
        <div className='exercise-Container'>
            
            <div className='products-container'>
                {/* <h2>Select today’s exercise:{services.length} </h2> */}
                
             {
                 services.map(service=><Service
                 key={service.id}
                 service={service}
                 handleAddToCart={handleAddToCart}
                 ></Service>)
             }
            
            </div>
            <div className='cart-container'>
                <div>
                <h2>Iftekhar</h2>
                <p><small>Chittagong,bangladesh</small></p>
                </div>
                <div>
                    <h3>Add A Break</h3>
                </div>
                <div>
                    <Cart cart={cart}></Cart>
                </div>

                <button>Activity Complete</button>
            </div> 
        </div>
    );
};

export default Exercise;