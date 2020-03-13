import React from 'react';
import { Recommend } from '../../types';
import RecommendCard from '../molecules/RecommendCard';
import './RecommendCards.sass';
import './RecommendCards.media.sass';

type Props = {
  data: Recommend[]
}

const RecommendCards: React.FC<Props> = ({ data }) => (
  <div className="RecommendCards">
    {
      data.map((d: Recommend) => (
        <div className="RecommendCards__card">
          <RecommendCard {...d} />
        </div>
      ))
    }
    <div className="RecommendCards__mediaDottedSpace">
      <div className="RecommendCards__mediaDotted" />
      <div className="RecommendCards__mediaDotted" />
      <div className="RecommendCards__mediaDotted" />
    </div>
  </div>
);

export default RecommendCards;
