import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './header.module.scss';
import logo from '../../assets/race-logo.png';

function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={location.pathname === '/' && styles.active}
              >
                Garage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/winners"
                className={location.pathname === '/winners' && styles.active}
              >
                Winners
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
