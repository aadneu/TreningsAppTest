import { useState } from 'react'
import React from 'react'
import AddWorkout from './AddWorkout'



const DisplayWorkouts = ({content, userid,postFunction, deleteFunction}) => {

    const [addMode, setAddMode] = useState(false) //aktiverer addmode som viser frem AddWorkout-componenten
    const [showCont, setContLength] = useState(5)
    const toggleAdd = () => {
        setAddMode(true)
    }
  
    const [edit, setEdit] = useState(false)
    const toggleEdit = () => {
      setEdit(prevEdit => !prevEdit);
    }
    const options = { weekday: 'short', day: 'numeric', month: 'short', };

    const handleDelete = (id) => {
    let fetchurl =`https://localhost:7211/api/Workouts?userId=${userid}`
    let deleteurl = 'https://localhost:7211/api/Workouts/'
    if (userid === 'offline') {
      fetchurl = "http://localhost:5000/workouts/";
      deleteurl = "http://localhost:5000/workouts/";
      }
      deleteFunction(deleteurl, fetchurl, id)
      setEdit(false)
    }

    const toggleAllWorkouts = () => {
      setContLength(prevLength => prevLength !== 5 ? 5 : content.length)
    }


  return (
    <div className='p-1 m-1'>
     
        <h3 onClick={toggleAllWorkouts} className='border-bottom' style={{cursor: 'pointer'}}>Treninger</h3>
        
       
       {/* Treningsdata er mappet ut i en tabell */}
        { content && (
          <div className='p-1'>
            {/* HEADERS */}
            <div className="row " style={{fontWeight: 'bold'}}>
              <div className="col-4">når</div>
              <div className="col-4">aktivitet</div>
              <div className="col-1">tid</div>
              <div onClick={toggleEdit} style={{cursor: 'pointer'}} className="col-1 text-danger text-center">rediger</div>
            </div>
            {/* CONTENT */}
            {content.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0,showCont).map((trening) => (
            <div  className="row shadow-sm pb-1 " key={trening.id}>
              <div className="col-4 ">{new Date(trening.date).toLocaleDateString('no-NO', options)}</div>
              <div className="col-4">{trening.activity}</div>
              <div className="col-1">{trening.duration}</div>
              <div className="col text-center "  style={{fontWeight: 'bold'}}>
                  {/* VISE SLETT KNAPP VISS MAN TRYKKER PÅ REDIGER */}
                  {edit && <div onClick={() => handleDelete(trening.id)} style={{cursor: 'pointer'}} className='text-light bg-danger rounded'>x</div> }
              </div>
            </div>
            ))}

            {/* <div className="row">
              <div className="col">x</div>
              <div className="col">x</div>
              <div className="col">x</div>
              <div className="col">x</div>
            </div> */}
          </div>
          )
        }

         {addMode ? (<AddWorkout setAddMode={setAddMode} userid={userid} postFunction={postFunction} /> ) 
              : (<div style={{fontWeight: 'bold', cursor: 'pointer'}} onClick={toggleAdd}>Legg til aktivitet</div>)
              }
        
        
    </div>
  )
}

export default DisplayWorkouts
{/* {content && (
  <table>
    <thead>
      <tr>
        <th>når</th>
        <th>aktivitet</th>
        <th>tid</th>
        <th><button onClick={toggleEdit}>rediger</button></th>
      </tr>
    </thead>
    <tbody>
      {content.slice(-5).map((trening) => (
        <tr key={trening.id}>
          <td>{new Date(trening.date).toLocaleDateString('no-NO', options)}</td>
          <td>{trening.activity}</td>
          <td>{trening.duration}</td>

          {edit && <td>
            <button className='btn btn-warning btn-sm'>endre</button>
            <button onClick={() => handleDelete(trening.id)} className='btn btn-danger btn-sm'>slett</button>
          </td>}

        </tr>
        
        
      ))}
     
    
    </tbody>
  </table>
)
} */}