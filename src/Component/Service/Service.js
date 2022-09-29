import React from 'react';
import './Service.css';
const Service = (props) => {
    const {name, img, Time,} = props.service;
    console.log(img)
    return (
        <div className='service'>
            <img src={img} alt=''></img>
        <div className='service-info'>
           <p className='service-name'>{name}</p>
            <p className='service-time'>Time Require: {Time}s</p>
         </div>
         
            <button className='btn-cart'>
                <p>Add To List</p>
                
            </button>
         

        </div>
    );
};

export default Service;