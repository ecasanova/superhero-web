import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd';
import Menu from '../Menu';
import FilterOutlined from '@ant-design/icons/lib/icons/FilterOutlined';
import MenuOutlined from '@ant-design/icons/lib/icons/MenuOutlined';
import './style.scss';
import {CloseCircleOutlined, CloseOutlined} from '@ant-design/icons';

const Navbar = () => {
  const [isActiveAside, setActiveAside] = useState(false);
  const [isActiveFilters, setActiveFilters] = useState(false);

  const toggleAsideNav = () => {
    setActiveFilters(false);
    setActiveAside(!isActiveAside);
  };
  const toggleFilters = () => {
    setActiveFilters(!isActiveFilters);
  };
  return (
    <>
      <div
        className={
          isActiveAside
            ? 'c-header__sidebar c-header__sidebar-active'
            : 'c-header__sidebar'
        }>
        <Menu />
      </div>
      <div className="c-header">
        <div className="c-header__wrapper">
          <div className="c-header__nav">
            <div className="c-header__menu">
              <div className="c-menu" onClick={toggleAsideNav}>
                {!isActiveAside && <MenuOutlined />}
                {isActiveAside && <CloseOutlined />}
              </div>
              <h1 className="c-header__logo">
                <Link to="/">SUPERSEARCH</Link>
              </h1>
              <Menu />
              {!isActiveAside && (
                <div className="c-header__menu-filter">
                  <span>x Clear Filters</span>
                  <Button ghost type="primary" onClick={toggleFilters}>
                    <FilterOutlined /> Filter
                  </Button>
                </div>
              )}
            </div>
          </div>
          {!isActiveAside && (
            <div
              className={
                isActiveFilters
                  ? 'c-header__filters c-header__filters-active'
                  : 'c-header__filters'
              }>
              <div className="c-container">Name</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
