import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd';
import Menu from '../Menu';
import './style.scss';
import {
  MenuOutlined,
  CloseOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import FiltersComponent from '@/features/FiltersComponent';

const Navbar = () => {
  const [isActiveAside, setActiveAside] = useState(false);
  const [isActiveFilters, setActiveFilters] = useState(false);

  let initialStateFilters = {
    name: '',
    gender: '',
    alignment: '',
    powerstats: [],
    intelligence: [0, 100],
    strength: [0, 100],
    speed: [0, 100],
    durability: [0, 100],
    power: [0, 100],
    combat: [0, 100],
  };

  const [filters, setFilters] = useState(initialStateFilters);

  const clearFilters = () => {
    setFilters(initialStateFilters);
  };
  const toggleAsideNav = () => {
    setActiveFilters(false);
    setActiveAside(!isActiveAside);
  };
  const toggleFilters = () => {
    setActiveFilters(!isActiveFilters);
    if (!isActiveFilters) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
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
                  <span className="clean-filter" onClick={clearFilters}>
                    x Clear Filters
                  </span>
                  {isActiveFilters && (
                    <Button type="primary" onClick={toggleFilters}>
                      <MenuUnfoldOutlined /> Filters
                    </Button>
                  )}
                  {!isActiveFilters && (
                    <Button ghost type="primary" onClick={toggleFilters}>
                      <MenuFoldOutlined /> Filters
                    </Button>
                  )}
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
              <FiltersComponent filters={filters} setFilters={setFilters} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
