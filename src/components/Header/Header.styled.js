import { NavLink } from 'react-router-dom';
import styles from 'styled-components';

export const SpaceXHeader = styles.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

export const SpaceXNav = styles.nav`
  display: flex;
  align-items: center;
`;

export const ListContainer = styles.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const List = styles.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavigationLink = styles(NavLink)`
  text-decoration: none;
  color: black;
  padding: 0.2rem 1rem;
  border-radius: 0.2rem;

  &.active {
    background-color: #017BFE;
    color: white;
  }

`;

export const Logo = styles.a`
  display: flex;
  gap: 1rem;
  text-decoration: none;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const Image = styles.img.attrs((props) => ({
  src: props.src,
}))`
  display: block;
  width: 4rem;
`;
