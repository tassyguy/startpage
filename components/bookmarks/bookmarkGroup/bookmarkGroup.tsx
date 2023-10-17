import React from 'react';
import Bookmark from '../bookmark/bookmark';

interface BookmarkGroupProps {
  groupName: string;
  bookmarks: {
    siteName: string;
    icon: string;
    url: string;
    description: string;
  }[];
}

const BookmarkGroup: React.FC<BookmarkGroupProps> = ({ groupName, bookmarks }) => (
  <div className="bookmark-group">
    <h2>{groupName}</h2>
    <div className="bookmarks">
      {bookmarks.map((bookmark, index) => (
        <Bookmark key={index} {...bookmark} />
      ))}
    </div>
  </div>
);

export default BookmarkGroup;
