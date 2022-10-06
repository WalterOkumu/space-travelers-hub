import React from 'react';
import { useDispatch } from 'react-redux';
import { reserve } from '../redux/rockets';
import {
  RocketCard,
  ReserveButton,
  IMG,
  DetailsBlock,
  Badge,
} from './Rockets.styled';

function Rocket({
  img,
  name,
  description,
  id,
  reserved,
  reservation,
}) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(reserve(id));
  };
  return (
    <RocketCard>
      <IMG src={img} alt="Rocket Image" />
      <DetailsBlock>
        <h2>{name}</h2>
        <p>
          <Badge reserved={reserved}>Reserved</Badge>
          {description}
        </p>
        <ReserveButton type="button" onClick={handleClick} reserved={reserved}>
          {reservation}
        </ReserveButton>
      </DetailsBlock>
    </RocketCard>
  );
}

export default Rocket;
