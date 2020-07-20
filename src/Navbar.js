import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLink.css';

const NavBar = () => {

   return (  
      <nav className="navbar navbar-expand-md navbar-dark fixed-top nav-adjust">
         <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <div className="navbar-nav">
                <NavLink exact to="/" className="navbar-links nav-item" activeClassName='active'> Home </NavLink>
                <NavLink exact to="/about" className="navbar-links nav-item" activeClassName="active" > About </NavLink>
                <NavLink exact to="/contact" className="navbar-links nav-item" activeClassName="active" > Contact </NavLink>
                <NavLink exact to="/services" className="navbar-links nav-item" activeClassName="active" > Services </NavLink>
            </div>
         </div>
      </nav>
   )
}

export default NavBar;



              