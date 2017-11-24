import List from './List';
import { branch, renderComponent } from 'recompose';

import NoResult from '../NoResult';

export default branch(
  ({ list }) => !list.length,
  renderComponent(NoResult)
)(List);
