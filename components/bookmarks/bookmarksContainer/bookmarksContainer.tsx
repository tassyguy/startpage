import React from 'react';
import BookmarkGroup from '../bookmarkGroup/bookmarkGroup';

interface BookmarkContainerProps {
  bookmarkData: {
    siteName: string;
    icon: string;
    url: string;
    description: string;
    bookmarkGroup: string;
  }[];
}

const BookmarkContainer: React.FC<BookmarkContainerProps> = ({ bookmarkData }) => {
  // Group bookmarks by "bookmarkGroup" field
  const groupedBookmarks: { [key: string]: BookmarkData[] } = {};
  bookmarkData.forEach((bookmark) => {
    const groupName = bookmark.bookmarkGroup;
    if (!groupedBookmarks[groupName]) {
      groupedBookmarks[groupName] = [];
    }
    groupedBookmarks[groupName].push(bookmark);
  });

  return (
    <div className="bookmark-container">
      {Object.entries(groupedBookmarks).map(([groupName, bookmarks], index) => (
        <BookmarkGroup key={index} groupName={groupName} bookmarks={bookmarks} />
      ))}
    </div>
  );
};

export default BookmarkContainer;
