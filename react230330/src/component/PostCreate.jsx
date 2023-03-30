import React from 'react';
import './PostCreate.css';

const PostCreate = () => {
  return (
    <div className='PostCreate-wrapper'>
      <div className='PostCreate-container'>
        <div className='PostCreate-post-btn-box'>
          <button className='PostCreate-post-btn1'>나가기</button>
          <button className='PostCreate-post-btn2'>등록</button>
        </div>
        <div className='PostCreate-title-box'>
          <input type='text' placeholder='글 제목을 입력해주세요.'></input>
        </div>
        <div className='PostCreate-text-box'>
          <textarea type='text' placeholder='본문 내용을 입력해주세요.'></textarea>
          <div className='picture-box'>
          <div className='picture-box'></div>
          <div className='picture-box'></div>
          <div className='picture-box'></div>
          <div className='picture-add-btn'></div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default PostCreate
