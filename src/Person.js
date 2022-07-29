import React, { useState } from 'react'

export const Person = (props) => {

    const [flag,setFlag]=useState(false);
    
    const deletePerson=()=>{
        props.onDelete(props.id);
    }
    
    return (
        <article id="person" key={props.id} onMouseEnter={()=>setFlag((flag)=>flag=!flag)} onMouseLeave={()=>setFlag((flag)=>flag=!flag)} >
            
        <img src={props.image} alt="" />

        <div className='details'>
        <h4>{props.name}</h4>
        <p>{flag?props.age+" years old":props.day}</p>
        </div>

        <span>
        <i className="material-icons noselect" onClick={deletePerson}>delete</i>
        </span>


    </article>
    )
}

export default Person;