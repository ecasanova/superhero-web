import React from 'react';
import {useSelector} from 'react-redux';
import {getSuperheroes} from '@/features/SuperheroCard/cardsListComponent/redux/cardsListSelector';
import LoadingComponent from '@/shared/components/Loading';
import SuperheroDetailTable from '../superhetoDetailTable';
import AddToTeamComponent from '../../SuperheroCard/addToTeamComponent';
import RelatedHeroes from '../relatedHeroes';
import fallbackImageSrc from '@/shared/assets/images/unknow.jpg';

import './style.scss';

function SuperheroDetail({superHeroId}) {
  const superHeroList = useSelector(getSuperheroes);
  const superheroe = superHeroList.superheroes.filter(
    (item) => item.id === superHeroId,
  )[0];
  if (superheroe) {
    return (
      <div className="c-superhero-detail o-container-fluid">
        <div className="c-container u-12/12">
          <div className="o-grid grid">
            <div className="o-grid__col u-4/12@md u-12/12@xxs">
              <div className="c-card">
                <div className="c-card__card-image c-card__card-image--detail">
                  <img
                    src={
                      superheroe.image.url
                        ? superheroe.image.url
                        : fallbackImageSrc
                    }
                    alt={superheroe.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbackImageSrc;
                    }}
                  />
                </div>
                <div className="c-card__card-content c-card__card-content">
                  <div className="c-card__card-title">{superheroe.name}</div>
                  <AddToTeamComponent superhero={superheroe} />
                </div>
              </div>
            </div>
            <div className="o-grid__col u-8/12@md u-12/12@xxs">
              <div className="c-superhero-detail__text">
                <div className="o-grid grid">
                  <div className="o-grid__col u-6/12@md u-12/12@xxs o-grid__col--powerstats">
                    <h1>Powerstats</h1>
                    <SuperheroDetailTable
                      superHeroData={superheroe.powerstats}
                    />
                  </div>
                  <div className="o-grid__col u-6/12@md u-12/12@xxs o-grid__col--appearance">
                    <h1>Appearance</h1>
                    <SuperheroDetailTable
                      superHeroData={superheroe.appearance}
                    />
                  </div>
                </div>
                <h1>Biography</h1>
                <SuperheroDetailTable superHeroData={superheroe.biography} />
                <h1>Work</h1>
                <SuperheroDetailTable superHeroData={superheroe.work} />
                <RelatedHeroes superheroe={superheroe} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <LoadingComponent />;
  }
}

export default SuperheroDetail;
