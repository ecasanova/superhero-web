import React, {useState, useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {Col, Row} from 'antd';
import {getSuperheroeslist} from '@/features/SuperheroCard/cardsListComponent/redux/cardsListSelector';
import {Card} from '@/features/SuperheroCard/cardComponent';
import {nextPage} from './redux/paginationReducer';
import InfiniteScroll from 'react-infinite-scroll-component';
import './style.scss';

export function Cards() {
  const dispatch = useDispatch();

  let data = useSelector(getSuperheroeslist);
  useEffect(() => {
    loadMoreData();
  }, [data]);

  const loadMoreData = () => {
    dispatch(nextPage());
  };

  return (
    <div className="c-cards o-container o-container__texture">
      <InfiniteScroll
        dataLength={data.total}
        next={loadMoreData}
        hasMore={true}>
        <Row gutter={[25, 25]}>
          {data.superheroes?.map((superhero, index) => {
            return (
              <Col span={6} xs={24} md={12} l={6} xl={6} key={index}>
                <Card superhero={superhero} key={index} />
              </Col>
            );
          })}
        </Row>
      </InfiniteScroll>
    </div>
  );
}

export default Cards;
