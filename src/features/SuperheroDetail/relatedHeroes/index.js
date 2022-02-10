import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {getSuperheroeslist} from '@/features/SuperheroCard/cardsListComponent/redux/cardsListSelector';
import fallbackImageSrc from '@/shared/assets/images/unknow.jpg';

function RelatedHeroes({superheroe}) {
  const superHeroeList = useSelector(getSuperheroeslist);
  const relatedList = superHeroeList
    .filter(
      (item) =>
        item.id != superheroe.id &&
        item.appearance.race === superheroe.appearance.race,
    )
    .sort(() => Math.random() - Math.random())
    .slice(0, 8);
  return (
    <ul>
      {relatedList.map((related, index) => {
        return (
          <li index={index}>
            <Link to={`/details/${related.id}`} title={related.name}>
              <img
                className="related"
                src={related.image.url}
                alt={related.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbackImageSrc;
                }}
              />
            </Link>
          </li>
        );
      })}
      {relatedList.length === 0 && <li>No related heroes</li>}
    </ul>
  );
}

export default RelatedHeroes;
