import React,{useState} from 'react'
// import LineChart from './LineChart'
const Footer = () => {
  const [number,Setnumber]=useState(0);
  const increment=()=>{
    Setnumber(number+1)
  }
  const decrement=()=>{
    Setnumber(number-1)
  }
  return (
    <div class='container4'>
      {number}<br/>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      {/* <LineChart /> */}
    </div>
  )
}

export default Footer 