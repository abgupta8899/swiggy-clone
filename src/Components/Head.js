import React from 'react'
import { URL_LOGO } from './Utils/url';
import useOnlineStatus from './Utils/useOnlineStatus';

const Head = () => {
    const onlineStatuse =useOnlineStatus();


    return (
      <div className='head'>
        <div className='logo'>
          <img src= { URL_LOGO} alt='siggy' />
  
        </div>
        <div className='nav-items'>
          <ul>
            <li>Status:{onlineStatuse ? "🟢" : "🔴"}</li>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>CART</li>
          </ul>
        </div>
  
      </div>
    );
  };
export default Head


