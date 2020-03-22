import React from 'react';
import './Books.sass';

const Books: React.FC = () => (
  <div className="Books">
    <div className="Books__title">
      <i className="material-icons">offline_bolt</i>
      書籍情報
    </div>
    <div className="Books__title">
      <i className="material-icons">offline_bolt</i>
      書籍情報
    </div>
    <div className="Books__arrow Books__arrow--left" />
    <div className="Books__arrow Books__arrow--right" />
    <div className="Books__inline">
      <img src="https://nukumore.jp/data/img/articleContents/old/29889/lbs4691_book.jpg" />
      <img src="https://nukumore.jp/data/img/articleContents/old/29550/lbs4666_book.jpg" />
      <img src="https://nukumore.jp/data/img/articleContents/old/29336/lbs4697_book.jpg" />
      <img src="https://nukumore.jp/data/img/articleContents/old/29190/lbs4529_book.jpg" />
      <img src="https://nukumore.jp/data/img/articleContents/old/27254/lbs4485_book.jpg" />
      <img src="https://nukumore.jp/data/img/articleContents/old/28216/lbs4474_book.jpg" />
      <img src="https://nukumore.jp/data/img/articleContents/old/28113/lbs4592_book.jpg" />
    </div>
  </div>
);

export default Books;
