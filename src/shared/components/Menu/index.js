import React from 'react';
import {NavLink} from 'react-router-dom';

function Menu() {
  return (
    <>
      <NavLink
        to="/home"
        className="c-header__menu-item"
        activeClassName="c-header__menu-item c-header__menu-item--active">
        Superheroes
      </NavLink>
      <NavLink
        to="/team"
        className="c-header__menu-item"
        activeClassName="c-header__menu-item c-header__menu-item--active">
        My Team
      </NavLink>
    </>
  );
}

export default Menu;
