/* CARD DEFAULT COMPONENT*/
import React from 'react';

export function Card() {
  return (
    <div className="card">
      <CharacterImage />
      <div className="overlap-group1">
        <div className="overlap-group-2">
          <AddToTeam />
          <div className="up-circle-o-2"></div>
        </div>
        <div className="wolverine obelixpro-bold-coconut-20px">Wolverine</div>
      </div>
    </div>
  );
}

export function CharacterImage(props) {
  const {black_Panther_Uncanny} = props;

  return (
    <div className="character-image">
      <img alt="" className="_uncanny" src={black_Panther_Uncanny} />
    </div>
  );
}

export function AddToTeam(props) {
  const {className, switchIconOffProps} = props;

  return (
    <div className={`add-to-team-2 ${className || ''}`}>
      <div className="add-to-team helveticaneue-normal-white-14px">
        Add to Team
      </div>
      <SwitchIconOff className={switchIconOffProps.className} />
    </div>
  );
}

export function SwitchIconOff(props) {
  const {className} = props;

  return (
    <div className={`switch-icon-off-2 ${className || ''}`}>
      <div className="group-2">
        <img
          alt=""
          className="oval-1-copy-13"
          src="https://anima-uploads.s3.amazonaws.com/projects/61fa7de5706a62990992eaeb/releases/61fa84a62a926757ebad9131/img/notification-modal-oval-1-copy-13-28907C17-7ED7-4509-82E0-94E94AB5DACF@2x.png"
        />
        <div className="unknown">
          <img
            alt=""
            className="shape"
            src="https://anima-uploads.s3.amazonaws.com/projects/61fa7de5706a62990992eaeb/releases/61fa84a62a926757ebad9131/img/search-results-shape-B1F28395-0936-4B54-814D-523B49727C57@2x.png"
          />
        </div>
      </div>
    </div>
  );
}

function CardCopy4(props) {
  const {characterImageProps, switchIconOffProps} = props;

  return (
    <div className="card-copy-4">
      <CharacterImage
        black_Panther_Uncanny={characterImageProps.black_Panther_Uncanny}
      />
      <div className="overlap-group7">
        <div className="overlap-group6">
          <div className="add-to-team-5 helveticaneue-normal-white-14px">
            Add to Team
          </div>
          <SwitchIconOff className={switchIconOffProps.className} />
        </div>
        <div className="name-2 obelixpro-bold-coconut-20px">Jean Grey</div>
      </div>
    </div>
  );
}

function CharacterImage2() {
  return (
    <div className="character-image-1">
      <img
        alt=""
        className="wolverine_uncanny"
        src="https://anima-uploads.s3.amazonaws.com/projects/61fa7de5706a62990992eaeb/releases/61fa84a62a926757ebad9131/img/search-results-mobile-filters-wolverineuncanny-FE89F9CC-EE89-4E25-B600-54EF76F8031C.jpg"
      />
    </div>
  );
}
