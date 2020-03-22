import React from 'react';
import { Recommend } from '../../types';
import './RecommendCard.sass';
import './RecommendCard.media.sass';

const RecommendCard: React.FC<Recommend> = ({ title, category, thumbnail }) => (
  <div className="RecommendCard">
    <img
      className="RecommendCard__thumbnail"
      src={thumbnail}
      alt={title}
    />
    <div className="RecommendCard__information">
      <div className="RecommendCard__title">
        { title }
      </div>
      <div className="RecommendCard__views">
        <b>1650</b> views | バッグ・小物入れ
      </div>
      <div className="RecommendCard__category">
        <i className="material-icons">folder</i>
        { category }
      </div>
    </div>
  </div>
);

export default RecommendCard;
