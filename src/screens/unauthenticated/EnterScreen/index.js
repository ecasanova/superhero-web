import React from 'react';
import {useHistory} from 'react-router-dom';

import './style.scss';
import superHeroBackgroundImage from '@/shared/assets/images/dc-comics-png-background-image.png';

function EnterScreen() {
  let history = useHistory();

  function handleClick() {
    history.push('/home');
  }
  return (
    <div className="c-login is-enter">
      <div className="o-container u-12/12">
        <div className="o-grid o-grid--middle grid">
          <div className="o-grid__col u-6/12@md u-12/12@xxs">
            <div className="c-login__superhero-group">
              <img src={superHeroBackgroundImage} alt="" />
            </div>
          </div>
          <div className="o-grid__col u-6/12@md u-12/12@xxs">
            <h1 className="c-login__title">
              Create your own team of superheroes
            </h1>
            <button
              className="c-login__button"
              type="button"
              onClick={handleClick}>
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterScreen;
