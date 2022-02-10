import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd';
import Menu from '../Menu';
import FilterOutlined from '@ant-design/icons/lib/icons/FilterOutlined';
import MenuOutlined from '@ant-design/icons/lib/icons/MenuOutlined';
import './style.scss';

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleNav = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div
        className={
          isActive
            ? 'c-header__sidebar c-header__sidebar-active'
            : 'c-header__sidebar'
        }>
        <Menu />
      </div>
      <div className="c-header">
        <div className="c-header__wrapper">
          <div className="c-header__nav">
            <div className="c-header__menu">
              <div className="c-menu" onClick={toggleNav}>
                <MenuOutlined />
              </div>
              <h1 className="c-header__logo">
                <Link to="/">SUPERSEARCH</Link>
              </h1>
              <Menu />
              <Button ghost className="c-header__menu-filter" type="primary">
                <FilterOutlined /> Filter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
