import React from 'react'
import { ImSearch } from "react-icons/im";
import './MyProfil.css';
import { AiOutlineDown } from "react-icons/ai";

const MyProfil = () => {
  return (
    <div className='MyProfil-wrapper'>
      <div className='MyProfil-container'>
        <div className='MyProfil-img-box'>
          <img src="/hamster.jpg" alt="hamster"></img>
        </div>
        <div className='MyProfil-info-box'>
          <p className='MyProfil-name'>김지혜1234</p>
          <p className='MyProfil-post-count'>게시물 12</p>
        </div>
      </div>
      <div className='MyProfil-search-box'>
        <p>내 게시글</p>
        <div className='MyProfil-search-bar'>
          <ImSearch/>
          <input type='text' placeholder='search'></input>
        </div>
      </div>
      <div className='MyProfil-post-list-box'>
        <div className='MyProfil-post-list'>
          <img src="/hamster.jpg" alt="로고"></img>
        </div>
        <div className='MyProfil-post-list'>
        <img src="/hamster.jpg" alt="로고"></img>
      </div>
      <div className='MyProfil-post-list'>
          <img src="/hamster.jpg" alt="로고"></img>
        </div>
      </div>
    </div>
  )
}

export default MyProfil

