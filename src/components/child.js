import React from "react";

function Child (props) {
  return(
    <>
    <h1> Child</h1>
    <button onClick= {()=> 
      props.changeName('bharathi')}> click me for  child</button>
    </>
  )


}
export default Child;