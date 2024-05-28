import React from 'react'
const Event = () => {
    const sum=(a)=>{
            alert(a.type);
    }
  return (
    <div>
        <button onClick={sum}>click</button>
    </div>
  )
}

export default Event