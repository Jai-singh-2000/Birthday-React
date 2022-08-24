import { useEffect, useState } from 'react';
import './App.css';
import imageArr from "./components/Image";
import List from "./components/List";
import Form from './components/Form';
import PageNotFound from './components/PageNotFound';
import {Routes,Route} from "react-router-dom";

function App() {
  const [people,setPeople]=useState([]);
 
  const deletePerson=(personId)=>{
    let newList=people.filter((user)=>{
      return user.id!==personId;
    })   
    setPeople(newList);

  }

  const addPerson=(personObj)=>{
     let image=imageArr[people.length].image;
     personObj.image=image;

     setPeople([...people,personObj])
  }

  const updateLocalStorage=(people)=>{
    localStorage.setItem("birthdays",JSON.stringify(people))
  }

  useEffect(()=>{
    let response=localStorage.getItem("birthdays");
    if(response)
    {
      let data=JSON.parse(response);
      setPeople(data);
    }else{

      console.log("No data")
    }
  },[])

  useEffect(()=>{
    updateLocalStorage(people);
  },[people])
  
  return (
    <main>

      <section className="container">
        
        <Routes>

        <Route path="/" element={<List people={people} onDelete={deletePerson}/>}/>
        
        <Route path="/form" element={<Form addPerson={addPerson} people={people}/>}/>

        <Route path="*" element={<PageNotFound/>}/>
               
        </Routes>
      </section>
      
    </main>

    
  );
}

export default App;
