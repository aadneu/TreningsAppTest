import React from 'react'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react'
import './App.css'
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
    <div id='appdiv'  className='bg-light container min-vh-100 d-flex flex-column border border-black'>
        {/* denne øverste raden viser alltid dato, og brukernavn og loggutknapp når man har logget inn */}
        <div className="row" > 
            <div className='col-auto'>{new Date().toLocaleDateString('no-NO', options)}</div> 
            {
             userid && <div className='col d-flex flex-row-reverse'>
                                <div className='' onClick={handleLogout} style={{fontWeight: 'bold'}}>logg ut</div>
                                <div className='px-2'>|</div>
                                <div>user: {showUser} </div>
                        </div> 
            }
        </div>
       {/* denne raden viser logg inn component, og deretter Show (som inneholder selve appen) når man har logget inn  
       MY AUTO FOR Å SENTRERE DIVEN*/}
        <div className="row mt-3"> 
            <div className="col">
                {!userid ? <Login setUserid={setUserid} setShowUser={setShowUser}/>
                    : <Show userid={userid} />
                 }   
            </div>     
        </div>
       
       <div className="row"></div>
       
    </div>
  )
}

export default App