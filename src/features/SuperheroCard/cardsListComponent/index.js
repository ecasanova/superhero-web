import React from 'react';
import {useSelector} from 'react-redux';
import {getSuperheroeslist} from '@/features/SuperheroCard/cardsListComponent/redux/cardsListSelector';
import {Col, Row} from 'antd';
import {Card} from '@/features/SuperheroCard/cardComponent';

import './style.scss';

export function Cards() {
  const items = useSelector(getSuperheroeslist);
  return (
    <div className="c-cards o-container">
      <Row gutter={[25, 25]}>
        {items?.map((superhero, index) => {
          return (
            <Col span={6} xs={24} md={6} l={6} xl={6} key={index}>
              <Card superhero={superhero} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Cards;
