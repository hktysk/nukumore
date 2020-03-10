import React from 'react';
import Header from '../organisms/Header';
import CatchPhrase from '../molecules/CatchPhrase';
import './App.sass';

const App: React.FC = () => (
  <div className="App">
    <Header />
    <div className="App__catchPhrase">
      <CatchPhrase />
    </div>
  </div>
);

export default App;
