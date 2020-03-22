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
      <img src="https://otonano-shumatsu.com/data/img/articleContents/number/5818/4910122330403_1584081106.jpeg" />
      <img src="https://otonano-shumatsu.com/data/img/articleContents/number/5704/9d8a5864be9f8c2b3e78a829326958f1.jpeg" />
      <img src="https://otonano-shumatsu.com/data/img/articleContents/number/5710/hyoushi_1582701411.jpeg" />
      <img src="https://otonano-shumatsu.com/data/img/articleContents/number/5711/hyoushi_1582701851.jpeg" />
      <img src="https://otonano-shumatsu.com/data/img/articleContents/number/5712/hyoushi_1582702141.jpeg" />
      <img src="https://otonano-shumatsu.com/data/img/articleContents/number/5713/hyoushi_1582774059.jpeg" />
      <img src="https://otonano-shumatsu.com/data/img/articleContents/number/5714/hyoushi_1582776258.jpeg" />
    </div>
  </div>
);

export default Books;
