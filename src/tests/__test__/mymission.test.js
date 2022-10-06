import renderer from 'react-test-renderer';
import MyMission from '../../components/Profile/MyMission';

it('renders MyMission correctly', () => {
  const tree = renderer.create(<MyMission />).toJSON();
  expect(tree).toMatchSnapshot();
});
