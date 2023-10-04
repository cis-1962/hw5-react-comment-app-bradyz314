import AddPost from './components/AddPost';
import Post from './components/Post';
import PostSection from './components/PostSection';
import './style.css'

export default function App() {
  return (
    <>
      <h1> CIS 1962 Community</h1>
      <AddPost 
        start=''
        header='New Post'
      />
      <PostSection />
      <Post name='test' post='This is a test' depth={1}/>
    </>
  );
}
