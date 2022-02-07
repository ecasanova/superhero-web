import React from 'react';
import Header from '@/shared/components/Header';
import './style.scss';

function MyteamScreen() {
  return (
    <>
      <Header />
      <div className="o-container">
        You do not have any team members selected. Please make selections on
        superheros page.
      </div>
    </>
  );
}

export default MyteamScreen;
