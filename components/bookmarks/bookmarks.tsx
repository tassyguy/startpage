import Bookmark from "./bookmark/bookmark";
import BookmarkGroup from "./bookmarkGroup/bookmarkGroup";
import BookmarksContainer from "./bookmarksContainer/bookmarksContainer";

export default function Bookmarks() {
    return(
        <div>
            <BookmarksContainer></BookmarksContainer>
            <BookmarkGroup></BookmarkGroup>
            <Bookmark></Bookmark>
        </div>
    )
}