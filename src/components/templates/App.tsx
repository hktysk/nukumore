import React from 'react';
import { Recommend, ArticleListItemType } from '../../types';
import Header from '../organisms/Header';
import CatchPhrase from '../molecules/CatchPhrase';
import RecommendCard from '../molecules/RecommendCard';
import Books from '../organisms/Books';
import Ranking from '../organisms/Ranking';
import NewArticles from '../organisms/NewArticles';
import Banners from '../organisms/Banners';
import Footer from '../organisms/Footer';
import './App.sass';
import './App.media.sass';

type Props = {
  recommends: Recommend[]
  articles: ArticleListItemType[]
}

const App: React.FC<Props> = ({ recommends, articles }) => (
  <div className="App">
    <CatchPhrase />
    <Header />
    <div className="App__recommends">
      <div className="App__hotTopic">
        <img src="https://otonano-shumatsu.com/data/img/articleMainImg/number/5523/thumb_lg_mato_osaka_069_image26_1577458270.jpeg" />
        <div className="App__hotTopicTitle">
          <span>
          <span className="App__hotTopicTitleName">Hot Topics</span><br />
            大阪穴場グルメ_江戸時代より伝承のそばを受け
          </span>
        </div>
      </div>

      <div className="App__hotCardsSpace">
       {
         recommends.map((v: Recommend) => (
           <div className="App__hotCard">
             <RecommendCard  {...v} />
           </div>
         ))
       }
      </div>
    </div>

    <div className="App__main">
      <div className="App__books">
        <Books />
      </div>
      <div className="App__ranks">
        <Ranking title={`
          <i class="material-icons">show_chart</i>
          急上昇
        `} articles={articles} />
        <Ranking title={`
          <i class="material-icons">thumb_up</i>
          昨日
        `} articles={articles} />
        <Ranking title={`
          <i class="material-icons">local_library</i>
          週間
        `} articles={articles} />
      </div>

      <div className="App__newArticles">
        <NewArticles articles={articles} tags={[
          'テイクアウト',
          'カニ',
          'ウニ',
          '馬肉',
          '「築地・アメ横・松戸」エビ・カニ三都物語',
          '秋葉原駅',
          '真田幸村を食と散策で楽しむ！',
          'うどん',
          '上田駅',
          '築地市場駅',
          '築地場外市場',
          'パン',
          'メタボ',
          '居酒屋日本シリーズ博多VS広島',
        ]} />
      </div>

      <div className="App__banners">
        <Banners />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
