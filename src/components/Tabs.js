import React, { useState } from "react";

const Tabs = ({items}) => {
  const [active,setActive]=useState("");

  const handleClickEvent = (index) => {
    setActive(index);
  };

  return (
    <div>
        <ul>
          {items.map((tab,index)=>(
            <li key={index} onClick={()=>handleClickEvent(index)} >
              {tab.title}
            </li>
          ))}
        </ul>
        <div>
        {items[active].content}
        </div> 
    </div>
  )
}

export default Tabs
