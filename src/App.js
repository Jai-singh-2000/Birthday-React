import { useState } from 'react';
import './App.css';
import data from './data';
import List from "./List";

function App() {
  const [people,setPeople]=useState(data);
  const deletePerson=(personId)=>{
    
    let newList=people.filter((user)=>{
      return user.id!==personId;
    })
    
    setPeople(newList);
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>

      
        <List people={people} onDelete={deletePerson}/>

        <div className='button-container'>
        <button type="button">Add Birthday</button>
        </div>
      
      </section>
    </main>
  );
}

export default App;
