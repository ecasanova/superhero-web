import React from 'react';
import fallbackImageSrc from '@/shared/assets/images/dc-comics-png-background-image.png';

import './style.scss';

export function Card({superhero}) {
  return (
    <div className="c-card">
      <div className="c-card__card-image">
        <img
          src={superhero.image.url ? superhero.image.url : fallbackImageSrc}
          alt=""
          onError={(e) => {
            e.target.onError = null;
            e.target.src = fallbackImageSrc;
          }}
        />
      </div>
      <div className="c-card__card-content">
        <div className="c-card__card-title">{superhero.name}</div>
        <div className="c-card__team-toggle">Add to team</div>
      </div>
    </div>
  );
}

export default Card;
