import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from '../../components/redux/configureStore';
import Missions from '../../components/Missions';

it('renders Missions correctly', () => {
  const tree = renderer.create(<Provider store={configureStore}><Missions /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
