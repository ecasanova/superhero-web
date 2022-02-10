import React from 'react';
import Header from '@/shared/components/Header';
import MyTeamComponent from '@/features/MyTeamComponent';
import './style.scss';

function MyteamScreen() {
  return (
    <>
      <Header />
      <MyTeamComponent />
    </>
  );
}

export default MyteamScreen;
