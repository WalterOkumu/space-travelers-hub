import styles from 'styled-components';

export const RocketCard = styles.div`
  max-width: 100vw;
  min-height: 16rem;
  display: flex;
  padding: 1rem;
  margin-bottom: 1rem;
  align-items: flex-start;
`;

export const DetailsBlock = styles.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 1.2rem;
`;

export const ReserveButton = styles.button`
  min-width: 8.5rem;
  height: 3.25rem;
  color: ${(props) => (props.reserved ? 'gray' : 'white')};
  background-color: ${(props) => (props.reserved ? 'transparent' : '#017BFE')};
  padding: 1rem;
  border: ${(props) => (props.reserved ? '1px solid gray' : 'none')};
  border-radius: 0.3rem;
  font-size: ${(props) => (props.reserved ? '0.8rem' : '0.9rem')};
  white-space: nowrap;
  align-text: center;
`;

export const IMG = styles.img`
  width: 30%;
  height: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: 1rem;
  margin-left: 0.5rem;
`;

export const Badge = styles.small`
  padding: 0.25rem;
  margin-right: 3px;
  color: white;
  border-radius: 0.2rem;
  background-color: #017BFE;
  display: ${(props) => (props.reserved ? 'inline-block' : 'none')};
`;
