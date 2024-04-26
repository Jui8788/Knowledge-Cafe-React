import PropTypes from "prop-types";
import { BsBookmarkPlus } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="space-y-8 mt-4">
      <img
        className="w-full"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="text-2xl text-red-600"
          >
            <BsBookmarkPlus />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a href="" className="mx-2">
              #{hash}
            </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="text-purple-800 font-bold underline"
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
