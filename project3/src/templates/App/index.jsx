import { PostsProvider } from '../../contexts/PostsProvider';
import './styles.css';

export default function App() {
  return (
    <PostsProvider>
      <div className="App">
        <h1>oi</h1>
      </div>
    </PostsProvider>
  );
}
