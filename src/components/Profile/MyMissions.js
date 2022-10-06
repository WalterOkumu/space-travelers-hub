import React from 'react';
import { useSelector } from 'react-redux';
import MyMission from './MyMission';

function MyMissions() {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <div>
      <h2>My Missions</h2>
      {joinedMissions.map((mission) => (
        <MyMission key={mission.id} name={mission.mission_name} />
      ))}
    </div>
  );
}

export default MyMissions;
