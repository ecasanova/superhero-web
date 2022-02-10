import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Button} from 'antd';
import FilterOutlined from '@ant-design/icons/lib/icons/FilterOutlined';
import MenuOutlined from '@ant-design/icons/lib/icons/MenuOutlined';
import './style.scss';

const Navbar = () => {
  return (
    <div className="c-header">
      <div className="c-header__wrapper">
        <div className="c-header__nav">
          <div className="c-header__menu">
            <div className="c-menu">
              <MenuOutlined />
            </div>
            <h1 className="c-header__logo">
              <Link to="/">SUPERSEARCH</Link>
            </h1>
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
            <Button ghost className="c-header__menu-filter" type="primary">
              <FilterOutlined /> Filter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
