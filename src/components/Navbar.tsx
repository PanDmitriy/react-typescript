import React from 'react';

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper deep-purple darken-2">
      <a href="/" className="brand-logo center">React + TypeScript</a>
      <ul className="left hide-on-med-and-down">
        <li><a href="/">Список дел</a></li>
        <li><a href="/">Информация</a></li>
      </ul>
    </div>
  </nav>
);