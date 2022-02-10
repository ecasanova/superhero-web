import React from 'react';
import {useSelector} from 'react-redux';
import {getSuperheroeslist} from '@/features/SuperheroCard/cardsListComponent/redux/cardsListSelector';
import LoadingComponent from '@/shared/components/Loading';
import SuperheroDetailTable from '../superhetoDetailTable';
import AddToTeamComponent from '../../SuperheroCard/addToTeamComponent';

import fallbackImageSrc from '@/shared/assets/images/dc-comics-png-background-image.png';

import './style.scss';

function SuperheroDetail({superHeroId}) {
  const superHeroList = useSelector(getSuperheroeslist);
  const superheroe = superHeroList.filter((item) => item.id === superHeroId)[0];
  if (superheroe) {
    return (
      <div className="c-superhero-detail o-container-fluid">
        <div className="c-container u-12/12">
          <div className="o-grid o-grid--middle grid">
            <div className="o-grid__col u-5/12@md u-12/12@xxs">
              <div className="c-card">
                <div className="c-card__card-image">
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
            <div className="o-grid__col u-7/12@md u-12/12@xxs">
              <div className="o-grid grid">
                <div className="o-grid__col u-6/12@md u-12/12@xxs">
                  <h1>Powerstats</h1>
                  <SuperheroDetailTable
                    superHeroData={superheroe.powerstats}
                    className="c-powerstats"
                  />
                </div>
                <div className="o-grid__col u-6/12@md u-12/12@xxs">
                  <h1>Appearance</h1>
                  <SuperheroDetailTable
                    superHeroData={superheroe.appearance}
                    className="c-appearance"
                  />
                </div>
              </div>
              <h1>Biography</h1>
              <SuperheroDetailTable superHeroData={superheroe.biography} />
              <h1>Work</h1>
              <SuperheroDetailTable superHeroData={superheroe.work} />
              <h1>Related Characters</h1>
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
