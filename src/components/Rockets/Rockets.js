import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { rocketsThunk } from '../redux/rockets';

function Rockets() {
  const dispatch = useDispatch();
  const rocketsList = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(rocketsThunk());
  }, []);
  return (
    <div>
      {rocketsList.map((rocket) => (
        <Rocket
          img={rocket.flickr_images[0]}
          name={rocket.rocket_name}
          description={rocket.description}
          key={rocket.id}
          id={rocket.id}
          reserved={rocket.reserved}
          reservation={rocket.reservation}
        />
      ))}
    </div>
  );
}

export default Rockets;
