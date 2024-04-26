import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 m-4 p-4">
      <div>
        <h3 className="text-4xl">Reading Time: {readingTime}</h3>
      </div>
      <h2 className="text-2xl text-center">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, index) => (
        <Bookmark key={index} bookmark={bookmark} />
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
