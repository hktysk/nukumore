import React from 'react';
import { ArticleListItemType } from '../../types';
import RankingListItem from './RankingListItem';
import './Ranking.sass';

type Props = {
  title: string,
  articles: ArticleListItemType[]
}

const Ranking: React.FC<Props> = ({ title, articles }) => (
  <div className="Ranking">
    <div className="Ranking__title" dangerouslySetInnerHTML={{ __html: title }} />
    {
      articles.map((d: ArticleListItemType, k: number) => (
        <div className="Ranking__article">
          <RankingListItem rank={k + 1} {...d} />
        </div>
      ))
    }
  </div>
);

export default Ranking;
