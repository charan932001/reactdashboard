import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { MdOutlineSearch } from "react-icons/md";
import { BsDashCircle } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { TbFileReport } from "react-icons/tb";
import { Link } from 'react-router-dom';
const Header = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className='container2'>
      <div style={{position:'relative',bottom:'19px'}}>
      <MdOutlineSearch style={{position:'relative',top:'25px',color:'white',paddingLeft:'12px'}} />
      <input style={{width:'208px',paddingLeft:'17px',height:'25px',color:'white',backgroundColor:'black',marginLeft:'10px'}} type='text' placeholder='Search'/>
     </div>
     <div style={{position:'relative',bottom:'39px'}}>
      <BsDashCircle style={{color:'white',position:'relative',left:'25px',top:'22px'}}/>
      <button style={{width:'225px',height:'25px',backgroundColor:'black',color:'white',marginRight:'10px',marginLeft:'10px'}}>Dashboard</button>
      <GrProjects style={{color:'white',position:'relative',top:'22px',left:'25px'}} />
      <button style={{width:'225px',height:'25px',backgroundColor:'black',color:'white',marginRight:'10px',marginLeft:'10px'}}>Projects</button>
      <FiUsers style={{color:'white',position:'relative',top:'22px',left:'25px'}} />
      <button style={{width:'225px',height:'25px',backgroundColor:'black',color:'white',marginRight:'10px',marginLeft:'10px'}}>Users</button>
      <TbFileReport style={{color:'white',position:'relative',top:'22px',left:'25px'}} />
      <button style={{width:'225px',height:'25px',backgroundColor:'black',color:'white',marginRight:'10px',marginLeft:'10px'}}>Reports</button>
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
