import React from 'react';
import MyMissions from './MyMissions';
import MyRockets from './MyRockets';
import Cards from './Profile.styled';

function Profile() {
  return (
    <Cards>
      <MyMissions />
      <MyRockets />
    </Cards>
  );
}

export default Profile;
