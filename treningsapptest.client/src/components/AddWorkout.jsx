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
            
            <button className='btn mt-2 btn-primary btn-sm'>Legg til</button>
      </form>
      <button onClick={changeAddmode} className='btn mt-2 btn-primary btn-sm'>Tilbake</button>

      
    </div>
  )
}

export default AddWorkout