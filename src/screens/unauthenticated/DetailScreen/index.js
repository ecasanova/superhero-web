import React from 'react';
import Header from '@/shared/components/Header';
import './style.scss';
import SuperheroDetail from '@/features/SuperheroDetail/superheroDetail';
import {useParams} from 'react-router-dom';

function DetailScreen() {
  let {id} = useParams();
  return (
    <>
      <Header />
      <SuperheroDetail superHeroId={id} />
    </>
  );
}

export default DetailScreen;
