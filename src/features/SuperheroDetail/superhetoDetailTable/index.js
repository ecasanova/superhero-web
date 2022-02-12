import React from 'react';

function capitalizeFirstLetter(string) {
  let s = string.charAt(0).toUpperCase() + string.slice(1);
  return s.replace('-', ' ');
}

function SuperheroDetailTable({superHeroData}) {
  return (
    <ul className="c-detail-table">
      {Object.keys(superHeroData).map((power, index) => {
        return (
          <li index={power + '_' + index}>
            <b>{capitalizeFirstLetter(power)}: </b>
            {superHeroData[power] ? superHeroData[power] : 'No data'}
          </li>
        );
      })}
    </ul>
  );
}

export default SuperheroDetailTable;
