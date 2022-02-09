import React from 'react';

function capitalizeFirstLetter(string) {
  let s = string.charAt(0).toUpperCase() + string.slice(1);
  return s.replace('-', ' ');
}

function SuperheroDetailTable({superHeroData}) {
  return (
    <ul>
      {Object.keys(superHeroData).map((power, index) => {
        return (
          <li index={index}>
            <b>{capitalizeFirstLetter(power)}: </b>
            {superHeroData[power] ? superHeroData[power] : '-'}
          </li>
        );
      })}
    </ul>
  );
}

export default SuperheroDetailTable;
