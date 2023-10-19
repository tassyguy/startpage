import React from 'react';
import BookmarkContainer from './bookmarksContainer/bookmarksContainer';
import bookmarksData from '../../data/bookmarks.json'; // Import the bookmarks JSON

const Bookmarks: React.FC = () => (
  <div className="bookmarks">
    <BookmarkContainer bookmarkData={bookmarksData} />
  </div>
);

export default Bookmarks;
