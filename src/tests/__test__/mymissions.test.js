import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from '../../components/redux/configureStore';
import MyMissions from '../../components/Profile/MyMissions';

it('renders MyMissions correctly', () => {
  const tree = renderer
    .create(
      <Provider store={configureStore}>
        <MyMissions />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
