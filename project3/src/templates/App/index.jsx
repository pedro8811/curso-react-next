import { Posts } from '../../components/Posts/index';
import { PostsProvider } from '../../contexts/PostsProvider';
import './styles.css';

export default function App() {
  return (
    <PostsProvider>
      <div className="App">
        <Posts />
      </div>
    </PostsProvider>
  );
}
