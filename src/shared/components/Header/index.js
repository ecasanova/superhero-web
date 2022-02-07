import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {NavBtn} from './NavbarElements';
import {Button} from 'antd';
import './style.scss';

const Navbar = () => {
  return (
    <div className="c-header">
      <div className="c-header__wrapper">
        <div className="c-header__nav">
          <div className="c-header__menu">
            <h1 className="c-header__logo">
              <Link to="/"> SUPERSEARCH</Link>
            </h1>
            <NavLink
              to="/home"
              className="c-header__menu-item"
              activeClassName="c-header__menu-item c-header__menu-item--active">
              Superheroes
            </NavLink>
            <NavLink
              to="/my-team"
              className="c-header__menu-item"
              activeClassName="c-header__menu-item c-header__menu-item--active">
              My Team
            </NavLink>
          </div>
          <NavBtn>
            <Button ghost icon="MenuUnfoldOutline" type="primary">
              Filter
            </Button>
          </NavBtn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
