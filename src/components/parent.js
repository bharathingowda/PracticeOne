import React, {useState} from "react";
import Child from "./child";


function Parent() {
  const [words, setNameTo]= useState('Parent');
  return(
  <div>
    <h1>{words}</h1>
    <Child 
    changeName={words=>setNameTo(words)}/>
    </div>
    );
}

export default Parent;