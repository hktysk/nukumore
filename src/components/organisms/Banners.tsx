import React from 'react';
import './Banners.sass';

const Banners: React.FC = () => (
  <div className="Banners">
    <div className="Banners__arrow Banners__arrow--left" />
    <div className="Banners__arrow Banners__arrow--right" />
    <div className="Banners__inline">
      <img src="https://nukumore.jp/data/img/upload/upload_Img50.png" />
      <img src="https://nukumore.jp/data/img/upload/74eec0cf-b024-4085-b231-4f3cca481086.png" />
      <img src="https://nukumore.jp/data/img/upload/upload_Img63.png" />
      <img src="https://nukumore.jp/data/img/upload/a1e1ab54-fd25-4c05-aa22-ef6f5f64cff9.gif" />
    </div>
  </div>
);

export default Banners;
