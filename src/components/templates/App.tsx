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
        <img src="https://nukumore.jp/data/img/articleMainImg/number/866/ecbbc05b940f8f90dd4e8b280a5514fb.jpeg" />
        <div className="App__hotTopicTitle">
          <span>
          <span className="App__hotTopicTitleName">Hot Topics</span><br />
            体操着袋（お着替え袋・巾着）の作り方
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
          '小物入れ',
          '動物',
          'うさぎ',
          'ブレスレット',
          'ポーチ',
          'キッズ',
          '初心者さんにおすすめ簡単レシピ',
          'ハート',
          '和風の小物',
          'カバンの中に入れる小物の作り方',
          '子どもと遊べる折り紙の作り方',
          'キャンディ',
          'バレンタイン',
          '簡単！ こどもの日の折り紙の折形特集'
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
