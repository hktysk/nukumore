import React from 'react';
import './ArticleListItem.sass';
import './ArticleListItem.media.sass';

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
  category,
  tag
}) => (
  <div className="ArticleListItem">
    <img className="ArticleListItem__thumbnail" src={thumbnail} />
    <div className="ArticleListItem__information">
      <div className="ArticleListItem__ago">
        <b>3 </b>
        分前に公開
      </div>
      <div className="ArticleListItem__title">{ title }</div>
      <div className="ArticleListItem__description">{ description }</div>
      <div className="ArticleListItem__subInformation">
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
  </div>
);

export default ArticleListItem;
