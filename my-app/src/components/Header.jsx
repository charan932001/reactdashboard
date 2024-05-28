import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { MdOutlineSearch } from "react-icons/md";
import { BsDashCircle } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { TbFileReport } from "react-icons/tb";
const Header = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className='container2'>
      <div style={{position:'relative',bottom:'19px'}}>
      <MdOutlineSearch style={{position:'relative',top:'25px',color:'white',paddingLeft:'2px'}} />
      <input style={{width:'230px',paddingLeft:'17px',height:'25px',color:'white',backgroundColor:'black'}} type='text' placeholder='Search'/>
     </div>
     <div style={{position:'relative',bottom:'38px'}}>
        <BsDashCircle style={{position:'relative',top:'25px',color:'white'}} />
        <button style={{width:'248px',height:'30px',color:'white',backgroundColor:'black'}}>Dashboard</button>
      </div>
      <div style={{position:'relative',bottom:'57px'}}>
        <GrProjects style={{position:'relative',top:'25px',color:'white'}} />
        <button style={{width:'248px',height:'30px',color:'white',backgroundColor:'black'}}>Projects</button>
      </div>
      <div style={{position:'relative',bottom:'75.9px'}}>
        <FiUsers style={{position:'relative',top:'25px',color:'white'}} />
        <button style={{width:'248px',height:'30px',color:'white',backgroundColor:'black'}}>Users</button>
      </div>
      <div style={{position:'relative',bottom:'95px'}}>
        <TbFileReport style={{position:'relative',top:'25px',color:'white'}} />
        <button style={{width:'248px',height:'30px',color:'white',backgroundColor:'black'}}>Reports</button>
      </div>


   <div style={{ marginTop: '20px'}}>
        <Calendar
          onChange={setDate} 
          value={date} 
          className="custom-calendar"
          tileClassName="custom-tile"
        />
      </div>
    </div>
  );
}

export default Header;
