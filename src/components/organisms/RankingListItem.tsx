import React from 'react';
import { ArticleListItemType } from '../../types';
import './RankingListItem.sass';

type Props = ArticleListItemType & {
  rank: number
}

const RankingListItem: React.FC<Props> = ({
  rank,
  title,
  thumbnail,
  views,
  category,
}) => (
  <div className="RankingListItem">
    <div className="RankingListItem__rank">{ rank }</div>
    <img className="RankingListItem__thumbnail" src={thumbnail} />
    <div className="RankingListItem__information">
      <div className="RankingListItem__title">{ title }</div>
      <div className="RankingListItem__subInformation">
        <div className="RankingListItem__views">
          <span className="RankingListItem__viewsStrong">{ views }</span>
          views
        </div>
        <div className="RankingListItem__category">{ category }</div>
      </div>
    </div>
  </div>
);

export default RankingListItem;
