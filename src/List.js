import React, { useState } from 'react';
import './List.css';
import Person from './Person';

const List = ({people,onDelete}) => {

  const deletePerson=(personId)=>{
    onDelete(personId)
  }
  
  return (
      <>
        {
          people.map((person)=>{
          
            return <Person key={person.id} {...person} onDelete={deletePerson}/>
      
          })
        }
      </>
  )
}

export default List;
