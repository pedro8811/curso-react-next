import './styles.css';
import P from 'prop-types';
import { PostCard } from '../PostCard';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} id={post.id} body={post.body} cover={post.cover} title={post.title} />
    ))}
  </div>
);

// -- redundante --
// Posts.defaultProps = {
//   posts: [],
// };

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      cover: P.string.isRequired,
      title: P.string.isRequired,
      id: P.number.isRequired,
      body: P.string.isRequired,
    })
  ),
};
