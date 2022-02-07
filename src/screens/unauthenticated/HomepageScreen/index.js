import React from 'react';
import Header from '@/shared/components/Header';
import Cards from '@/features/SuperheroCard/cardsListComponent';

import './style.scss';

function HomepageScreen() {
  return (
    <>
      <Header />
      <Cards />
    </>
  );
}

export default HomepageScreen;
