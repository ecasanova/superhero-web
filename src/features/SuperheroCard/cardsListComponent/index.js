import React, {useEffect} from 'react';

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
    // eslint-disable-next-line
  }, []);

  const loadMoreData = () => {
    dispatch(nextPage());
  };

  return (
    <>
      {data.length === 0 && (
        <div className="c-myteam o-container o-container__texture">
          <p>
            There are no Superheros based on the filters you have selected.
            Please clear filters and try again.
          </p>
        </div>
      )}
      {data.length > 0 && (
        <div className="c-cards o-container o-container__texture">
          <InfiniteScroll
            dataLength={data.length}
            next={() => {
              loadMoreData();
            }}
            hasMore={true}>
            <Row gutter={[25, 25]}>
              {data?.map((superhero, index) => {
                return (
                  <Col span={6} xs={24} md={12} l={6} xl={6} key={index}>
                    <Card superhero={superhero} key={index} />
                  </Col>
                );
              })}
            </Row>
          </InfiniteScroll>
        </div>
      )}
    </>
  );
}

export default Cards;
