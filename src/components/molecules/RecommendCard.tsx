import React from 'react';
import { Recommend } from '../../types';
import './RecommendCard.sass';

const RecommendCard: React.FC<Recommend> = ({ title, category, thumbnail }) => (
  <div className="RecommendCard">
    <img
      className="RecommendCard__thumbnail"
      src={thumbnail}
      alt={title}
    />
    <div className="RecommendCard__title">
      { title }
    </div>
    <div className="RecommendCard__category">
      { category }
    </div>
  </div>
);

export default RecommendCard;
