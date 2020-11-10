import React from 'react';
import newStyles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
  <nav className={newStyles.nav}>
  <div className={newStyles.item}>
    <NavLink to='/profile' activeClassName={newStyles.activeLink}>Profile</NavLink>
  </div>
  <div className={newStyles.item}>
    <NavLink to='/dialogs' activeClassName={newStyles.activeLink}>Messages</NavLink>
  </div>
  <div className={newStyles.item}>
    <NavLink to='/news' activeClassName={newStyles.activeLink}>News</NavLink>
  </div>
  <div className={newStyles.item}>
    <NavLink to='/music' activeClassName={newStyles.activeLink}>Music</NavLink>
  </div>
  <div className={newStyles.item}>
    <NavLink to='/settings' activeClassName={newStyles.activeLink}>Settings</NavLink>
  </div>
</nav>
  );
}

export default Navbar;