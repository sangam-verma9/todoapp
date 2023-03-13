import React from "react";

const Items=(propes)=>{
    return (
        <>
        <div className="items">
          <button className="cross" onClick={()=>{
            propes.onselect(propes.id)
          }
          }
          >X</button>
          <li>{propes.text}</li>
        </div>
        </>
      )
}
export default Items;