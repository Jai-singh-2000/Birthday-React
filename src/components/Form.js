import React,{useState} from 'react';
import { useNavigate} from "react-router-dom"

const Form = (props) => {
    const [name,setName]=useState('');
    const [date,setDate]=useState('');

    const navigate = useNavigate();

    const handleName=(e)=>{
        setName(e.target.value);
    }
    const handleDate=(e)=>{
        setDate(e.target.value);
    }

    const calculateAge=(dateString)=> {
        var birthday = +new Date(dateString);
        return ~~((Date.now() - birthday) / (31557600000));
      }

    const calculateDay=(dateString)=>{
        const monthArr = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];

        let dateObj=new Date(dateString);
        let date=dateObj.getDate();
        let month=monthArr[dateObj.getMonth()];
        return `${date} ${month}`
    }

    const handleSubmit=(e)=>{
        if(name===""||date==="")return

        e.preventDefault();

        const age=calculateAge(date);
        const day = calculateDay(date);
        
        let newPersonObj={
            id:Date.now(),
            name:name,
            date:date,
            day:day,
            age:age,
        }

        // console.log(newPersonObj);
        props.addPerson(newPersonObj);
        navigate("/");

        setName('');
        setDate('');
    }

    

  return (
    <>
     <section className="container">
        <h3> Add Friend</h3>
            <form className='form' onSubmit={handleSubmit}>

                <div className="input-box">
                <label htmlFor='name' >Name</label>
                <input type="text" name="name" value={name} onChange={handleName} required/>

                </div>

                <div className="input-box">
                <label htmlFor='date'>Date</label>
                <input type="date" name="date" value={date} onChange={handleDate} required/>
                </div>
            
            
                <div className='button-container'>
                <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
  

         </form>
    </section>
    
    </>
  )
}

export default Form;