import React from 'react';
import './style.scss';

import superHeroBackgroundImage from '@/shared/assets/images/dc-comics-png-background-image.png';

function EnterScreen() {
  return (
    <div className="c-login is-enter">
      <div className="o-container u-12/12">
        <div className="o-grid o-grid--middle">
          <div className="o-grid__col u-6/12@sm">
            <div className="c-login__superhero-group">
              <img src={superHeroBackgroundImage} alt="" />
            </div>
          </div>
          <div className="o-grid__col u-6/12@sm">
            <h1 className="c-login__title">
              Create your own team of superheroes
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterScreen;
