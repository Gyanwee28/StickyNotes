import React from 'react';
import {useHistory} from 'react-router';
const  Image =() =>{
    const history = useHistory();
   return (
       <img className="img" src={window.localStorage.getItem("img")} alt="card image"/>
   );
}
export default Image;