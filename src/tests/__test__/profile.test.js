import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from '../../components/redux/configureStore';
import Profile from '../../components/Profile/Profile';

it('renders Profile correctly', () => {
  const tree = renderer
    .create(
      <Provider store={configureStore}>
        <Profile />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
