import React from 'react';
import categories from '../atoms/nav.json';
import './SideNav.sass';

const SideNav: React.FC = () => (
  <div className="SideNav">
    {
      categories.map((d, k) => (
        <div className={ k === 0 ? "SideNav__category SideNav__select" : "SideNav__category" }>
          <img
            className="SideNav__categoryIcon"
            src={d.icon}
          />
          <div className="SideNav__categoryName">
            { d.name }
          </div>
        </div>
      ))
    }
  </div>
);

export default SideNav;
