import React from 'react';
import recommends from '../components/atoms/recommend-data.json';
import articles from '../components/atoms/articles-data.json';
import Template from '../components/templates/App';

const App:React.FC = () => (
  <Template
    recommends={recommends}
    articles={articles}
  />
);

export default App;
