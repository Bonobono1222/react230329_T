import './App.css';
import BottomBar from './component/BottomBar';
import Post from './component/Post';
import MyProfil from './component/MyProfil';
import {Routes, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PostCreate from './component/PostCreate';


function App() {
  return (
    <div className="App">
      <Post/>
      <PostCreate/>
      <BottomBar/>
    </div>
  );
}

export default App;
