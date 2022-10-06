import React from 'react';
import { useSelector } from 'react-redux';
import MyRocket from './MyRocket';

function MyRockets() {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div>
      <h2>My Rockets</h2>
      { reservedRockets.map((rocket) => (
        <MyRocket key={rocket.id} name={rocket.rocket_name} />
      ))}
    </div>
  );
}

export default MyRockets;
