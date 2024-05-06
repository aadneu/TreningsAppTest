import { useState } from 'react'
import React from 'react'
import AddWorkout from './AddWorkout'



const DisplayWorkouts = ({content, userid,postFunction, deleteFunction}) => {

    const [addMode, setAddMode] = useState(false) //aktiverer addmode som viser frem AddWorkout-componenten
    const toggleAdd = () => {
        setAddMode(true)
        
    }
  
    const [edit, setEdit] = useState(false)
    const toggleEdit = () => {
      setEdit(prevEdit => !prevEdit);
    }
    const options = { weekday: 'short', day: 'numeric', month: 'short' };

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

  return (
    <div className='border p-1 m-1'>
       {/* Treningsdata er mappet ut i en tabell */}
        { content && (
          <div >
            {/* HEADERS */}
            <div className="row font-weight-bold" style={{fontWeight: 'bold'}}>
              <div className="col-4">når</div>
              <div className="col">aktivitet</div>
              <div className="col">varighet</div>
              <div className="col"><button onClick={toggleEdit}>rediger</button></div>
            </div>
            {/* CONTENT */}
            {content.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0,5).map((trening) => (
            <div  className="row" key={trening.id}>
              <div className="col-4">{new Date(trening.date).toLocaleDateString('no-NO', options)}</div>
              <div className="col">{trening.activity}</div>
              <div className="col">{trening.duration}</div>
              <div className="col">
                  {/* VISE SLETT KNAPP VISS MAN TRYKKER PÅ REDIGER */}
                  {edit && <button onClick={() => handleDelete(trening.id)} className=''>x</button> }
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
              : (<button onClick={toggleAdd} className='btn btn-primary btn-sm'>Legg til trening</button>)
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