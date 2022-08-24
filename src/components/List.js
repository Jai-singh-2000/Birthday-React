import './List.css';
import React, { useEffect, useState } from 'react';
import Person from './Person';
import {useNavigate} from "react-router-dom"

const List = ({people,onDelete}) => {
  const [error,setError]=useState(false);
  const [date,setDate]=useState("");

  const navigate=useNavigate();

  const handleAddBirthday=()=>{
    if(people.length===5)
    {
      setError(true);
      setTimeout(()=>{
        setError(false);
      },1000)
    }else{
      navigate("/form");
    }
  }


  useEffect(()=>{
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth()); //January is 0!
    mm=monthNames[mm];
    setDate(`${dd} ${mm}`)
  },[])
  
  return (
      <>

        {
          people.length===0?<h3>Add friends birthday</h3>:
          error?<h3>Maximum limit exceed</h3>:<h3>Today's Date - {date}</h3>
        }
       
        
        {
          people.map((person)=>{
            
            return <Person key={person.id} {...person} onDelete={onDelete}/>
      
          })
        }

   
        <div className='button-container'>
          <button type="button" onClick={handleAddBirthday}>Add Birthday</button>
        </div>   

      
      </>
  )
}

export default List;
