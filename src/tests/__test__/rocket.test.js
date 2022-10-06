import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from '../../components/redux/configureStore';
import Rocket from '../../components/Rockets/Rocket';

it('renders Rocket correctly', () => {
  const tree = renderer
    .create(
      <Provider store={configureStore}>
        <Rocket />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
