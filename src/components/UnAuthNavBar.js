import React from 'react';
import { Link } from 'react-router-dom';
 {/*<div id="unauth-nav">
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/all">All Items</Link>
        <br></br>
        <Link to="/register">Register</Link>
      </div>*/}

const UnAuthNavBar = () => {
  return (




    <div>
      <ul>
          <li>
              <Link to="/">
                  <i class="fa fa-home fa-2x"></i>
                  <span class="nav-text">
                      Home
                  </span>
              </Link>

          </li>

          <li class="has-subnav">
              <Link to="/all">
                 <i class="fa fa-shopping-cart fa-2x"></i>
                  <span class="nav-text">
                      All Items
                  </span>
              </Link>

          </li>
          <li class="has-subnav">
              <Link to="/register">
                  <i class="fa fa-user fa-2x"></i>
                  <span class="nav-text">
                      Register
                  </span>
              </Link>
          </li>
        </ul>
    </div>
  )
}

export default UnAuthNavBar;