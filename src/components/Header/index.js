import React from 'react';
import {
  SpaceXNav,
  SpaceXHeader,
  ListContainer,
  List,
  NavigationLink,
  Logo,
  Image,
} from './Header.styled';
import SpaceXLogo from '../../assets/planet.png';

const Header = () => (
  <SpaceXHeader>
    <Logo>
      <Image src={SpaceXLogo} />
      Space Traveler&apos;s Hub
    </Logo>
    <SpaceXNav>
      <ListContainer>
        <List>
          <NavigationLink to="/" className={({ isActive }) => `${(isActive ? 'active' : '')}`} end>Rockets</NavigationLink>
        </List>
        <List>
          <NavigationLink to="/missions" className={({ isActive }) => `${(isActive ? 'active' : '')}`} end>Missions</NavigationLink>
        </List>
        <List>
          <NavigationLink to="/my-profile" className={({ isActive }) => `${(isActive ? 'active' : '')}`} end>My Profile</NavigationLink>
        </List>
      </ListContainer>
    </SpaceXNav>
  </SpaceXHeader>
);

export default Header;
