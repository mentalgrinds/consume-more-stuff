import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../containers/Logout';

const msgCount = localStorage.msgCount;
const AuthNav = () => {
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
          <li>
              <Link to="/messages">
                  <i class="fa fa-envelope-o fa-2x"></i>
                  <span class="nav-text">
                      Messages  {msgCount}
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
          {localStorage.admin ?
          <li>
              <Link to="/users">
                  <i class="fa fa-users fa-2x"></i>
                  <span class="nav-text">
                      Users
                  </span>
              </Link>

          </li>
          :
          null}

        </ul>
    </div>
  )
}

export default AuthNav;