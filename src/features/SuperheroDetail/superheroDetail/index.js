import React from 'react';
import {useSelector} from 'react-redux';
import {getSuperheroeslist} from '@/features/SuperheroCard/cardsListComponent/redux/cardsListSelector';
import LoadingComponent from '@/shared/components/Loading';
import SuperheroDetailTable from '../superhetoDetailTable';
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
              <img src={superheroe.image.url} alt="name" />
            </div>
            <div className="o-grid__col u-7/12@md u-12/12@xxs">
              <div className="o-grid grid">
                <div className="o-grid__col u-6/12@md u-12/12@xxs">
                  <h1>Powerstats</h1>
                  <SuperheroDetailTable superHeroData={superheroe.powerstats} />
                </div>
                <div className="o-grid__col u-6/12@md u-12/12@xxs">
                  <h1>Appearance</h1>
                  <SuperheroDetailTable superHeroData={superheroe.appearance} />
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
