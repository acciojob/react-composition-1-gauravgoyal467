import React, { useState } from "react";

const Tabs = ({items}) => {
    console.log(items[0].content);
  const [active,setActive]=useState(0);
  console.log(active);

  return (
    <div>
        <ul>
            {items.map((element,index) =>(
                    <li key="index" onClick={()=>{setActive(index)}}>
                    {element.title}
                </li>
                ))
            }
        </ul>
        {items[active].content}
    </div>
  )
}

export default Tabs