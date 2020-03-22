import React from 'react';
import { ArticleListItemType } from '../../types';
import ArticleListItem from '../organisms/ArticleListItem';
import './NewArticles.sass';

type Props = {
  articles: ArticleListItemType[]
  tags: string[]
}

const NewArticles: React.FC<Props> = ({ articles, tags }) => (
  <div className="NewArticles">
    <div className="NewArticles__articles">
      {
        articles.map((d: ArticleListItemType) => (
          <div className="NewArticles__article">
            <ArticleListItem {...d} />
          </div>
        ))
      }
    </div>
    <div className="NewArticles__tags">
      <div className="NewArticles__tagsTile">
        <div className="NewArticles__tagsTileTitle">話題のタグ</div>
        <div className="NewArticles__tagsSpace">
          {
            tags.map((v) => (
              <div className="NewArticles__tag NewArticles__tag--green">
                <i className="material-icons">local_offer</i>
                <span> </span>
                { v }
              </div>
            ))
          }
        </div>
        <div className="NewArticles__tagsTileTitle">定番のタグ</div>
        <div className="NewArticles__tagsSpace">
          {
            tags.map((v) => (
              <div className="NewArticles__tag NewArticles__tag--blue">
                <i className="material-icons">local_offer</i>
                <span> </span>
                { v }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </div>
);

export default NewArticles;
