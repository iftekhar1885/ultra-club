import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';
import './Exercises.css';
const Exercise = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data) )
    }, [])
    return (
        <div className='exercise-Container'>
            <div className='products-container'>
                {/* <h2>Select today’s exercise:{services.length} </h2> */}
                
             {
                 services.map(service=><Service
                 key={service.id}
                 service={service}
                 ></Service>)
             }
            
            </div>
            <div className='cart-container'>
            <h2>Select best service</h2>
            </div> 
        </div>
    );
};

export default Exercise;