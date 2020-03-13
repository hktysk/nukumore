import React from 'react';
import './CatchPhrase.sass';
import './CatchPhrase.media.sass';

const CatchPhrase: React.FC = () => (
  <div className="CatchPhrase">
  <span className="CatchPhrase__onlyPC">
    ぬくもりは、
  </span>
  ハンドメイド・手作り作品の作り方をご紹介するサイトです。
  <span className="CatchPhrase__onlyPC">
    子どもや初心者さん向けの簡単でかわいいものから、上級者向けのレシピまで取り揃えています！
  </span>
  </div>
);

export default CatchPhrase;
