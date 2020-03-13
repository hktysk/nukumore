import React from 'react';
import FooterImage from '../atoms/footer.png';
import './Footer.sass';

const Footer: React.FC = () => (
  <div className="Footer">
    <img src={FooterImage} />
  </div>
);

export default Footer;
