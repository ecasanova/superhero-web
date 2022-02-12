import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {getSuperheroes} from '@/features/SuperheroCard/cardsListComponent/redux/cardsListSelector';
import fallbackImageSrc from '@/shared/assets/images/unknow.jpg';
import {seoUrl} from '@/utils/seo';

function RelatedHeroes({superheroe}) {
  const superHeroeList = useSelector(getSuperheroes);
  const relatedList = superHeroeList.superheroes
    .filter(
      (item) =>
        item.id !== superheroe.id &&
        item.appearance.race === superheroe.appearance.race,
    )
    .sort(() => Math.random() - Math.random())
    .slice(0, 6);
  if (relatedList.length > 0) {
    return (
      <>
        <h1>Related Characters</h1>
        <ul>
          {relatedList.map((related, index) => {
            return (
              <li index={index}>
                <Link
                  to={`/details/${related.id}/${seoUrl(related.name)}`}
                  title={related.name}>
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
        </ul>
      </>
    );
  } else {
    return <></>;
  }
}

export default RelatedHeroes;
