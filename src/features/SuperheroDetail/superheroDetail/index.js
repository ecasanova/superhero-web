import React from 'react';
import detailImageSrc from '@/shared/assets/images/character-detail.jpg';

import './style.scss';

function SuperheroDetail() {
  return (
    <div className="c-superhero-detail o-container-fluid">
      <div className="c-container u-12/12">
        <div className="o-grid o-grid--middle grid">
          <div className="o-grid__col u-5/12@md u-12/12@xxs">
            <img src={detailImageSrc} alt="name" />
          </div>
          <div className="o-grid__col u-7/12@md u-12/12@xxs">
            <div className="o-grid grid">
              <div className="o-grid__col u-6/12@md u-12/12@xxs">
                <h1>Powerstats</h1>
              </div>
              <div className="o-grid__col u-6/12@md u-12/12@xxs">
                <h1>Appearance</h1>
              </div>
            </div>
            <h1>Work</h1>
            <h1>Related Characters</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuperheroDetail;
