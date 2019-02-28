import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

const Header = props => (
    <NavLink
        to={props.href}
        className={classes.Tab}
        activeClassName={classes.ActiveTab}
        isActive={(match, location) => {
			  if (!match && location.pathname !== props.anotherLink) {
			    return false;
			  }
			  return true;
        }}
    >
        {props.children}
    </NavLink>
);

export default Header;
