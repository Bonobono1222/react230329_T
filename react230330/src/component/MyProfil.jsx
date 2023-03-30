import React from 'react'
import { ImSearch } from "react-icons/im";
import './MyProfil.css';

const MyProfil = () => {
  return (
    <div className='MyProfil-wrapper'>
      <div className='MyProfil-container'>
        <div className='MyProfil-img-box'>
          <image src="./logo512.png" alt="로고"></image>
        </div>
        <div className='MyProfil-info-box'>
          <p className='MyProfil-name'>김지혜1234</p>
          <p className='MyProfil-post-count'>게시물 12</p>
        </div>
      </div>
      <div className='MyProfil-search-box'>
        <span>내 게시글</span>
        <div className='MyProfil-search-bar'>
          <ImSearch/>
          <input></input>
        </div>
      </div>
      <div className='MyProfil-post-list'>
        <img src='https://cdn.pixabay.com/photo/2019/02/24/15/32/hamster-4017846_640.jpg' alt='hamster'></img>
      </div>
    </div>
  )
}

export default MyProfil

