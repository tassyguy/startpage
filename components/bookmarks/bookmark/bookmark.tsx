import Link from 'next/link';
import React from 'react';

interface BookmarkProps {
  siteName: string;
  icon: string;
  url: string;
  description: string;
}

const Bookmark: React.FC<BookmarkProps> = ({ siteName, icon, url, description }) => (
  <div className="bookmark">
    <Link href={url} className="bookmark-link">
      <img src={icon} alt={siteName} className="bookmark-icon" />
      <div className="bookmark-text">
        <h3 className="site-name">{siteName}</h3>
        <p className="description">{description}</p>
      </div>
    </Link>
  </div>
);

export default Bookmark;
