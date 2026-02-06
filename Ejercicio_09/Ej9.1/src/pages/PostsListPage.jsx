import { Link } from 'react-router-dom';
import { POSTS } from '../data/posts';

const PostsListPage = () => {
  return (
    <div>
      <h1>Artículos</h1>
      <ul>
        {POSTS.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsListPage;