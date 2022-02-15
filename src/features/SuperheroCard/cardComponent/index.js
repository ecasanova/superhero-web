import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {DownCircleOutlined, UpCircleOutlined} from '@ant-design/icons';
import AddToTeamComponent from '../addToTeamComponent';
import {getMyTeam} from '../addToTeamComponent/redux/addToTeamSelector';
import {useSelector} from 'react-redux';
import {seoUrl} from '../../../utils/seo';
import './style.scss';
import fallbackImageSrc from '../../../shared/assets/images/unknow.jpg';

export function showHeroDescription() {}

export function Card({superhero}) {
  const [hoverDescriptionActive, setHoverDescriptionActive] = useState(false);

  const toggleHeroDescription = () => {
    setHoverDescriptionActive(
      (currentDescriptionState) => !currentDescriptionState,
    );
  };

  const myteam = useSelector(getMyTeam);

  const inMyTeam = (team, supehero) => {
    return team.some((obj) => superhero === obj);
  };

  if (superhero) {
    return (
      <div
        className={
          inMyTeam(myteam, superhero) ? 'c-card c-card__selected' : 'c-card'
        }>
        {hoverDescriptionActive && (
          <>
            <div className="c-card__description">
              <div className="c-card__card-content c-card__card-content--hover">
                <div className="c-card__card-title">{superhero.name}</div>
                <AddToTeamComponent superhero={superhero} />
                {Object.keys(superhero.powerstats).map((power, index) => {
                  return (
                    <div
                      key={index}
                      className="c-card__card-power"
                      style={{textTransform: 'capitalize'}}>
                      {power}: {superhero.powerstats[power]}
                    </div>
                  );
                })}
                <DownCircleOutlined
                  className="c-card__arrow-circle"
                  onClick={() => {
                    toggleHeroDescription();
                  }}
                />
              </div>
            </div>
          </>
        )}
        {!hoverDescriptionActive && (
          <>
            <div className="c-card__card-image">
              <Link
                to={`/details/${superhero.id}/${seoUrl(superhero.name)}`}
                title={superhero.name}>
                <img
                  src={
                    superhero.image.url ? superhero.image.url : fallbackImageSrc
                  }
                  alt={superhero.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = fallbackImageSrc;
                  }}
                />
              </Link>
            </div>
            <div className="c-card__card-content c-card__card-content">
              <div className="c-card__card-title">{superhero.name}</div>
              <AddToTeamComponent superhero={superhero} />
              <UpCircleOutlined
                className="c-card__arrow-circle"
                onClick={() => {
                  toggleHeroDescription();
                }}
              />
            </div>
          </>
        )}
      </div>
    );
  } else {
    return <></>;
  }
}

export default Card;
