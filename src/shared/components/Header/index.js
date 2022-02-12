import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {filterBy} from '@/features/FiltersComponent/redux/filtersReducer';
import {Button} from 'antd';
import Menu from '../Menu';
import {
  getSuperheroes,
  getFilters,
} from '@/features/SuperheroCard/cardsListComponent/redux/cardsListSelector';
import FiltersComponent from '@/features/FiltersComponent';
import './style.scss';
import {
  MenuOutlined,
  CloseOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const Navbar = () => {
  const dispatch = useDispatch();
  const [isActiveAside, setActiveAside] = useState(false);
  const [isActiveFilters, setActiveFilters] = useState(false);

  let initialStateFilters = {
    keyword: '',
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
  const [showClearFilters, setShowClearFilters] = useState(false);
  const [powerstats, setPowerstats] = React.useState({powers: []});

  const clearFilters = () => {
    setFilters(initialStateFilters);
    dispatchFilters(initialStateFilters);
    setShowClearFilters(false);
    setPowerstats({powers: []});
  };

  useEffect(() => {
    dispatchFilters(filters);
  }, []);

  const dispatchFilters = (filters) => {
    dispatch(filterBy({superheroes, filters}));
    if (filters != initialStateFilters) {
      setShowClearFilters(true);
    }
  };

  const toggleAsideNav = () => {
    setActiveFilters(false);
    setActiveAside(!isActiveAside);
  };

  const toggleFilters = () => {
    setActiveFilters(!isActiveFilters);
  };

  let superheroesList = useSelector(getSuperheroes);
  let filteredList = useSelector(getFilters);

  let superheroes = filteredList.length == 0 ? filteredList : superheroesList;

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
      <div
        className={
          isActiveFilters ? 'c-header c-header__filters-open' : 'c-header'
        }>
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
                  {showClearFilters && (
                    <span className="clean-filter" onClick={clearFilters}>
                      x Clear Filters
                    </span>
                  )}
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
              <FiltersComponent
                filters={filters}
                setFilters={setFilters}
                dispatchFilters={dispatchFilters}
                powerstats={powerstats}
                setPowerstats={setPowerstats}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
