import React from 'react';

export function MainNav(props) {
  const {supersearch} = props;

  return (
    <div className="main-nav">
      <div className="supersearch obelixpro-bold-black-20px">{supersearch}</div>
      <MenuItem menuItem="Superheroes" />
      <MenuItem menuItem="My Team" />
    </div>
  );
}

export default function MenuItem({menuItem}) {
  return (
    <div className="menu-item">
      <div className="text-1 helveticaneue-normal-black-18px">{menuItem}</div>
      <div className="underline"></div>
    </div>
  );
}
