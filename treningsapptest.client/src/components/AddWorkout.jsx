import React from 'react'
import { useState } from 'react';
import useFetch from './useFetch'

const AddWorkout = ({setAddMode, userid, postFunction}) => {

  const treninger = ['Styrke', 'Gaming', 'BJJ', 'Fotball', 'Løping', 'Langrenn', 'Klatring' ]
  const today = new Date().toISOString().split('T')[0];
  const createdAt = new Date();

  const [activity, setActivity] = useState('Styrke')
  const [duration, setDuration] = useState('')
  const [date, setDate] = useState(today)

  let posturl =`https://localhost:7211/api/Workouts`
  let fetchurl =`https://localhost:7211/api/Workouts?userId=${userid}`
    if (userid === 'offline') {
        posturl = "http://localhost:5000/workouts";
        fetchurl = "http://localhost:5000/workouts";
    }
  
    function changeAddmode(){
    setAddMode(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); //for oppdatering i sanntid, vet ikke hvordan jeg går rundt dette enda
    const newWorkout = {activity, duration, date, createdAt, userid};
    postFunction(posturl, fetchurl, newWorkout)
    
    setAddMode(false);
   
 };



 
  return (
    <div>
            
      {/* <form  onSubmit={handleSubmit}>

      <div className="row">
      <div className="col"><input required 
              value={date}
              onChange={(e) => setDate(e.target.value)} 
               type="date" name="dato"/></div>
      <div className="col"><select required
              value={activity} 
              onChange={(e) => setActivity(e.target.value)} 
             > {treninger.map((option, index) => (<option key={index}>{option}</option> ))}</select></div>
      <div className="col"><input required 
              value={duration}
              onChange={(e) => setDuration(e.target.value)} 
              type="number" placeholder="Tid" min="1" max="360" ></input></div>
      <div className="col"><button >Legg til</button></div>
      </div>

   
      </form> */}

<form  onSubmit={handleSubmit}>



<select required
    value={activity} 
    onChange={(e) => setActivity(e.target.value)} 
    className="form-select my-1"> {treninger.map((option, index) => (<option key={index}>{option}</option> ))}</select>

 <input required 
    value={duration}
    onChange={(e) => setDuration(e.target.value)} 
    className="form-control  my-1" type="number" placeholder="Tid i minutter" min="1" max="360" ></input>
    
 <input required 
    value={date}
    onChange={(e) => setDate(e.target.value)} 
    className="form-control  my-1" type="date" name="dato"/>
  
  < button  className='btn my-1 btn-dark btn-sm'>Legg til</button>
</form>

      <button className='btn my-1 btn-dark btn-sm' onClick={changeAddmode} >Tilbake</button>

      
    </div>
  )
}





export default AddWorkout