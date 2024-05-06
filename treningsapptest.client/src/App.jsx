import React from 'react'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react'

import Login from './components/Login'
import Show from './components/Show'


const App = () => {

    const [userid, setUserid] = useState(null)
    const [showUser, setShowUser] = useState('')

    const handleLogout = () => {
        setUserid(null);
    };

    
    const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };

  return (
    <div className='container'>
        {/* denne øverste raden viser alltid dato, og brukernavn og loggutknapp når man har logget inn */}
        <div className="row"> 
            <div className='col'>{new Date().toLocaleDateString('no-NO', options)}</div> 
            {
             userid && <div className='col text-end'>user: {showUser} <button onClick={handleLogout}>Logg ut</button></div> 
            }
        </div>
       {/* denne raden viser logg inn component, og deretter Show (som inneholder selve appen) når man har logget inn */}
        <div className="row">
            <div className="col">
                {!userid ? <Login setUserid={setUserid} setShowUser={setShowUser}/>
                    : <Show userid={userid} />
                 }   
            </div>     
        </div>
       
       
       
    </div>
  )
}

export default App