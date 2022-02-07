import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getSuperheroeslist} from '@/features/SuperheroCard/cardsListComponent/redux/cardsListSelector';
import {Col, Row} from 'antd';
import axios from 'axios';

import defaultImage from '@/shared/assets/images/dc-comics-png-background-image.png';

import './style.scss';

export function Cards() {
  const items = useSelector(getSuperheroeslist);
  console.log(items);
  return (
    <div className="c-cards o-container">
      <Row gutter={[25, 25]}>
        {items?.map((superhero, index) => {
          return (
            <Col span={6} className="c-cards__card">
              <div className="card-image">
                <img src={superhero.image.url} alt="" />
              </div>
              <div className="card-content">
                <div className="card-title">
                  <Link to="/detail">{superhero.name}</Link>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

async function CheckImage(path) {
  return await axios
    .get(path)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

export default Cards;
