import React, { useEffect, useState } from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    let total = 0;
    for(const service of cart){
        total = total + service.Time
    }
    const [time, setTime] = useState([]);
    const addBreakTime = (timeAdd) =>{
        setTime(timeAdd);
        localStorage.setItem('time', timeAdd)
    }
    useEffect(() =>{
        const prevTime = localStorage.getItem('time');
        if(prevTime){
            setTime(prevTime);
        }
    }, []); 
    return (
        <div className='cart'>
            <div className='identity'>
                <h2>IFTEKHAR</h2>
                <p><small>Chittagong,bangladesh</small></p>
                </div>
                <div className='study'> 
                        <p className='class'>JSC</p>
                        <p className='class'>SSC</p>
                        <p className='class'>HSC</p>
                </div>
                <div>
                    <h3>Add A Break</h3>
                    <div>
                        <div className='Break-button'>
                            <div className='time'>
                                <h5 onClick={() => addBreakTime('10s')}>10s</h5>
                            </div>
                            <div className='time'>
                                <h5 onClick={() => addBreakTime('20s')}>20s</h5>
                            </div>
                            <div className='time'>
                                <h5 onClick={() => addBreakTime('30s')}>30s</h5>
                            </div>
                            
                            <div className='time'>
                                <h5 onClick={() => addBreakTime('40s')}>40s</h5>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div>
              <h3>Exercise Details</h3>
              <div className='total-time'>
              <p>Exercise time: {total}s</p>
              
              </div>
              <div className='break'>
                <p>Break Time:</p>
                <p>{time}</p>
              </div>

            </div>
               <div className='btn'>
               <button>
                 <p>Activity Complete</p>
                </button>
               </div>      
            </div> 
    );
};

export default Cart;