import React from 'react'
import './PostWriteDelete.css';
import { HiPencilSquare } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsSuitHeart, BsFillSendFill ,BsFillBookmarkFill, BsHandThumbsUp } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";


const PostWriteDelete = () => {
  return (
    <div className='PostWriteDelete-wrapper'>
      <div className='PostWriteDelete-container'>
        <div className='PostWriteDelete-post-btn-box'>
          <button className='PostWriteDelete-write-btn1'><HiPencilSquare/>수정</button>
          <button className='PostWriteDelete-delete-btn2'><RiDeleteBin6Line/>삭제</button>
        </div>
        <div className='PostWriteDelete-title-box'>
          <input type='text' placeholder='글 제목을 입력해주세요.'></input>
        </div>
        <div className='PostWriteDelete-text-box'>
          <input type='text' placeholder='본문 내용을 입력해주세요.'></input>
        </div>
        <div className='PostWriteDelete-sympathy-box' >
          <button><BsSuitHeart/></button>
          <button><FiMoreHorizontal/></button>
          <button><BsFillSendFill/></button>
          <button className='PostWriteDelete-Bookmark'><BsFillBookmarkFill/></button>
        </div>
        <div className='PostWriteDelete-great-box'>
          <button><BsHandThumbsUp/></button><span>+2</span>
        </div>
        <span>#김지혜1234</span>
      </div>
    </div>
  )
}

export default PostWriteDelete

