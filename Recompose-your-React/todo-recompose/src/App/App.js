import React from 'react';

import { Input, List } from './components';

const App = ({ inputPack, listPack }) => [
  <Input key="app-input" {...inputPack} />,
  <List key="app-list" {...listPack} />
];

export default App;
