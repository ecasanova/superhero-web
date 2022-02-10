import React from 'react';
import {useSelector} from 'react-redux';
import {Col, Row} from 'antd';
import {Card} from '@/features/SuperheroCard/cardComponent';
import {Link} from 'react-router-dom';
import {getMyTeam} from '../SuperheroCard/addToTeamComponent/redux/addToTeamSelector';
import './../SuperheroCard/cardsListComponent/style.scss';
import './style.scss';
export function MyTeamComponent() {
  const items = useSelector(getMyTeam);
  console.log(items);
  if (items.length === 0) {
    return (
      <div className="c-myteam o-container">
        <p>
          You do not have any team members selected. Please make selections on{' '}
          <Link to={'/home'}>superheros page</Link>.
        </p>
      </div>
    );
  } else {
    return (
      <div className="c-cards o-container">
        <Row gutter={[25, 25]}>
          {items?.map((superhero, index) => {
            return (
              <Col span={6} xs={24} md={12} l={6} xl={6} key={index}>
                <Card superhero={superhero} key={index} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default MyTeamComponent;
