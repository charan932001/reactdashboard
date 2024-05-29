import React, { useState } from 'react';
import { MdOutlineMessage } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
const Note = () => {
  return (
    <div className='container3'>
      <div className='btn'>
        <button style={{borderWidth:"0px",marginRight:'25px'}}><MdOutlineMessage style={{height:'25px',width:'25px'}}/></button>
        <button style={{borderWidth:"0px",marginRight:'10px'}}><IoMdSettings style={{height:'25px',width:'25px'}} /></button>
        <button style={{width:'40px',borderWidth:"0px"}}><FaRegUser style={{height:'22px',width:'20px'}} /></button>
        <MdArrowDropDown style={{position:'relative',right:'10px',height:'25px',width:'15px'}}/>
        </div>
        
    </div>
  );
}

export default Note;
