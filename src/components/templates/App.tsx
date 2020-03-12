import React from 'react';
import { Recommend, ArticleListItemType } from '../../types';
import Header from '../organisms/Header';
import CatchPhrase from '../molecules/CatchPhrase';
import RecommendCards from '../organisms/RecommendCards';
import SideNav from '../organisms/SideNav';
import ArticleListItem from '../organisms/ArticleListItem';
import './App.sass';

type Props = {
  recommends: Recommend[]
  articles: ArticleListItemType[]
}

const App: React.FC<Props> = ({ recommends, articles }) => (
  <div className="App">
    <Header />
    <div className="App__catchPhrase">
      <CatchPhrase />
    </div>
    <div className="App__recommends">
      <RecommendCards data={recommends} />
    </div>

    <div className="App__main">
      <div className="App__sideNav">
        <SideNav />
      </div>
      <div className="App__articles">
        {
          articles.map((article: ArticleListItemType) => (
            <div className="App__articleListItem">
            <ArticleListItem {...article} />
            </div>
          ))
        }
      </div>
      <div className="App__information">
      </div>
    </div>
  </div>
);

export default App;
