import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.styles.scss';

const Profile = () => {
  const missions = useSelector(
    (state) => state.missions.missions.filter((mission) => mission.reserved === true),
  );

  return (
    <div className="profile-container">
      <div className="missions-container">
        <div className="title">My Missions</div>
        <ul className="my-missions">
          {
            missions && missions.map((mission) => (
              <li key={mission.id} className="my-missions-item">{mission.mission_name}</li>
            ))
          }
        </ul>
      </div>
      <div className="rockets-container">
        <div className="title">My Rockets</div>
        <ul className="my-rockets">
          <li className="my-rockets-item">Rocket 1</li>
          <li className="my-rockets-item">Rocket 2</li>
          <li className="my-rockets-item">Rocket 3</li>
          <li className="my-rockets-item">Rocket 4</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
