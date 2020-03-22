import React from 'react';
import './Banners.sass';

const Banners: React.FC = () => (
  <div className="Banners">
    <div className="Banners__arrow Banners__arrow--left" />
    <div className="Banners__arrow Banners__arrow--right" />
    <div className="Banners__inline">
      <img src="https://otonano-shumatsu.com/data/img/upload/upload_Img13.jpeg" />
    </div>
  </div>
);

export default Banners;
