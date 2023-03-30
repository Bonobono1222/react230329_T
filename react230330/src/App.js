import './App.css';
import Post from './component/Post';
import MyProfil from './component/MyProfil';
import {Routes, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PostCreate from './component/PostCreate';
import BottomBar from './component/BottomBar';
import PostWriteDelete from './component/PostWriteDelete';

function App() {
  return (
    <div className ="App">
      <Post></Post>
      <PostWriteDelete/>
      <BottomBar/>
    </div>
  );
}

export default App;
