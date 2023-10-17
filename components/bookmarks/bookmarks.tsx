import React from 'react';
import BookmarkContainer from './bookmarksContainer/bookmarksContainer';
import bookmarksData from '../../data/bookmarks.json'; // Import the bookmarks JSON

const Bookmarks: React.FC = () => (
  <div className="bookmarks">
    <h1>My Bookmarks</h1>
    <BookmarkContainer bookmarkData={bookmarksData} />
  </div>
);

export default Bookmarks;
