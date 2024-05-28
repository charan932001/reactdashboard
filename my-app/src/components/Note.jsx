import React, { useState } from 'react';
import { MdOutlineMessage } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { HiOutlineUserAdd } from "react-icons/hi";
const Note = () => {
  return (
    <div className='container3'>
      <div className='btn'>
        <button><MdOutlineMessage /></button>
        <button><IoMdSettings /></button>
        <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#about">About</a>
    <a href="#base">Base</a>
    <a href="#blog">Blog</a>
    <a href="#contact">Contact</a>
    <a href="#custom">Custom</a>
    <a href="#support">Support</a>
    <a href="#tools">Tools</a>
  </div>
</div>
        </div>
    </div>
  );
}

export default Note;
