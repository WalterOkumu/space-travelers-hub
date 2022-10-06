import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from '../../components/redux/configureStore';
import Rockets from '../../components/Rockets/Rockets';

it('renders Rockets correctly', () => {
  const tree = renderer
    .create(
      <Provider store={configureStore}>
        <Rockets />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
