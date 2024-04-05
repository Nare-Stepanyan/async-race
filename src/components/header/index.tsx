import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo">Here should be logo</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Garage</NavLink>
          </li>
          <li>
            <NavLink to="/winners">Winners</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
