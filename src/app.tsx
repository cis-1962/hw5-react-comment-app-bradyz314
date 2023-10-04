import AddPost from './components/AddPost';
import './style.css'

export default function App() {
  return (
    <>
      <h1> CIS 1962 Community</h1>
      <AddPost 
        start=''
        header='New Post'
      />
    </>
  );
}
