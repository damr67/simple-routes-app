import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/" className="navbar-brand">Logo</NavLink>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item mr-4">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item mr-4">
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
            </div>
          </nav>       
        </React.Fragment>
     );
}
 
export default NavBar;