import React from 'react';
import header from './header.css';
import xspace from '../images/xspace.jpg'
const Page = () => {
    return (
        <div  claaName="container" >
       
              <div  className="image" style={{width:'100vw',height:'100vh', backgroundImage:`url(${xspace})`,  
              backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'

                }}>

               
               </div>
        </div>
    );
};

export default Page;