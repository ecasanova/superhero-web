import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {getSuperheroeslist} from '@/features/SuperheroCard/cardsListComponent/redux/cardsListSelector';

export function Cards() {
  const items = useSelector(getSuperheroeslist);
  console.log(items);
  return (
    <div className="c-container cards-list">
      {items?.map((superhero, index) => {
        return (
          <div key={superhero.id} className="card">
            <div className="card-image">
              <img src={superhero.image.url} alt="" />
            </div>
            <div className="card-content">
              <div className="card-title">{superhero.name}</div>
              <div className="card-description">{superhero.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
