import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from '../../components/redux/configureStore';
import MyRockets from '../../components/Profile/MyRockets';

it('renders MyRockets correctly', () => {
  const tree = renderer
    .create(
      <Provider store={configureStore}>
        <MyRockets />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
