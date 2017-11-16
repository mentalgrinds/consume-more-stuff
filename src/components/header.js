import React from 'react';
import Logo from './logo';
import { Link } from 'react-router-dom';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import Logout from '../containers/Logout';
const image = 'hiphipheader.jpg';
const bgurl = require(`../assets/${image}`);



const Header = () => {
  const username = localStorage.getItem('username')

  const properName = (localStorage.getItem('userId') ? username.charAt(0).toUpperCase() + username.slice(1).toLowerCase() : null)




  return (
    <StickyHeader

      // This is the sticky part of the header.
      header={
        <div className="Header_root">
          <div className="header_trans">High Quality Legal Goods and Services</div>

          {localStorage.getItem('userId') ?
            <div className="login-btn">
                <div className="login-btn2">
                  <span className="login-span"> HELLO, {properName}</span>
                  <span className="login-span">
                  <Logout/>
                  </span>
                </div>
              </div> :  ` ` }


          {localStorage.getItem('userId') ? ` ` :
          <a href="#log"><Link to="/login">
            <div className="login-btn">
              <div className="login-btn2">
                <span className="login-span">START SHOPPING</span>
                <span className="login-span">
                LOG IN
                </span>
              </div>
            </div>
          </Link></a>}
        </div>
      }
      backgroundImage={bgurl}
      children = {
        <div className="childrenImg"> </div>
      }
    ><Logo/>

    </StickyHeader>
  )
}

export default Header;
