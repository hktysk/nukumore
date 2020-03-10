import React from 'react';
import recommends from '../components/atoms/recommend-data.json';
import Template from '../components/templates/App';

const App:React.FC = () => (
  <Template recommends={recommends} />
);

export default App;
