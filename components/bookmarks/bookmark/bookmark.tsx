import style from './bookmark.module.scss'

import React from 'react';

interface BookmarkProps {
  siteName: string;
  icon: string;
  url: string;
  description: string;
}

const Bookmark: React.FC<BookmarkProps> = ({ siteName, icon, url, description }) => (
  <div className="bookmark">
    <a href={url}>
      <img src={icon} alt={siteName} />
      <div>
        <h3>{siteName}</h3>
        <p>{description}</p>
      </div>
    </a>
  </div>
);

export default Bookmark;
