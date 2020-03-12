import React from 'react';
import './ArticleListItem.sass';

type Props = {
  title: string
  thumbnail: string
  description: string
  views: number
  category: string
  tag: string[]
}

const ArticleListItem: React.FC<Props> = ({
  title,
  thumbnail,
  description,
  views,
  category,
  tag
}) => (
  <div className="ArticleListItem">
    <div className="ArticleListItem__thumbnail">
      <img src={thumbnail} />
    </div>
    <div className="ArticleListItem__information">
      <div className="ArticleListItem__title">{ title }</div>
      <div className="ArticleListItem__description">{ description }</div>
      <div className="ArticleListItem__subInformation">
        <div className="ArticleListItem__views">
          <span className="ArticleListItem__viewsStrong">{ views }</span>
          views
        </div>
        <div className="ArticleListItem__category">{ category }</div>
      </div>
      {
        tag.map(name => (
          <span className="ArticleListItem__tag">
            <div className="ArticleListItem__tagInline">
              <i className="material-icons">local_offer</i>
              { name }
            </div>
          </span>
        ))
      }
    </div>
  </div>
);

export default ArticleListItem;
