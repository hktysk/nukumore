import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './pages/App';
import Article from './pages/Article';

const Router: React.FC = () => (
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route path="/article" component={Article} />
  </BrowserRouter>
);

export default Router;
