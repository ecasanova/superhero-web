import React from 'react';

import './style.scss';
import SuperheroDetail from '@/features/SuperheroDetail/superheroDetail';
import {useParams} from 'react-router-dom';

function DetailScreen() {
  let {id} = useParams();
  return (
    <>
      <SuperheroDetail superHeroId={id} />
    </>
  );
}

export default DetailScreen;
