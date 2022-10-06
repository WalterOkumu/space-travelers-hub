import renderer from 'react-test-renderer';
import MyRocket from '../../components/Profile/MyRocket';

it('renders MyRocket correctly', () => {
  const tree = renderer.create(<MyRocket />).toJSON();
  expect(tree).toMatchSnapshot();
});
