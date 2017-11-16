import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../containers/Logout';

const AuthNav = () => {
  return (

/*
      <div id="auth-nav">
        <div className="go-to-items">
          <Link to="/">Home</Link>
          <br/>
          <Link to="/all">All Items</Link>
        </div>

        <div className="user-tools">
          <Link to="/dashboard">Dashboard</Link>
          <br />
          <Link to="/settings">Settings</Link>
        </div>

        <div className="new-item">
          <Link className="new-item-button" to="/new-item">★New Item★</Link>
        </div>
      </div>
      )*/

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
              <Link to="/dashboard">
                  <i class="fa fa-user fa-2x"></i>
                  <span class="nav-text">
                      Dashboard
                  </span>
              </Link>

          </li>
          <li class="has-subnav">
              <Link to="/settings">
                 <i class="fa fa-wrench fa-2x"></i>
                  <span class="nav-text">
                      Settings
                  </span>
              </Link>

          </li>
          <li>
              <Link to="/new-item">
                  <i class="fa fa-plus-square fa-2x"></i>
                  <span class="nav-text">
                      New Item
                  </span>
              </Link>
          </li>
        </ul>
    </div>
  )
}

export default AuthNav;