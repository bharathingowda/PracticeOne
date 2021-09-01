// import React, {useState} from "react";
// import axios from 'axios';

// const GetName = () => {
//   const  [item, setItem] = useState([]);
//   const  [loading, setLoading] = useState(false);
//   axios
//     .get("https://randomuser.me/api/?inc=name")
//     .then(response =>  {
//       var userName;
//       response.data.results.forEach(user => {
//       userName = `${user.name.title} ${user.name.first} ${user.name.last}`    
//       })
//       setItem(userName);
//       }
//     )
          
//   .catch(error => setLoading(true));
// }

// const AppiCalling = () => {

//   return (
//     <>
//     <input className="quantity_input" name="auantity" type="text" value=""/> 
//     <input type= "button" value="click to get name" onClick={GetName}/>
//     </>
//   );
// }
// export default AppiCalling