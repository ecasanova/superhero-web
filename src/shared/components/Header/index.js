import React from 'react';

export default function Header(props) {
  return (
    <div className="main-nav">
      <div className="supersearch obelixpro-bold-black-20px">Suepersearch</div>
      <MenuItem menuItem="Superheroes" />
      <MenuItem menuItem="My Team" />
    </div>
  );
}

export function MenuItem({menuItem}) {
  return (
    <div className="menu-item">
      <div className="text-1 helveticaneue-normal-black-18px">{menuItem}</div>
      <div className="underline"></div>
    </div>
  );
}
