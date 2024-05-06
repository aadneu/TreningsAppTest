import React, { useEffect } from 'react'
import { useState } from 'react'
import useFetch from './useFetch'

const Login = ({setUserid, setShowUser}) => {

    const url = "https://localhost:7211/api/Users"
    const {data, fetchData} = useFetch()
    
    const [username, setUsername] = useState('')
    const [pw, setPw] = useState('')
    const [errmsg, setErrmsg] = useState('')

    useEffect(() => {
        fetchData(url)
    }, [])

    const offlineBtn = () => {
        setUserid('offline')
        setShowUser('offline')
    }

    const handleClick = (e) => {
        e.preventDefault();
        
        const user = data.find(user => user.name === username && user.password === pw);

        if (user){
            setUserid(user.id);
            setShowUser(user.name)
            console.log('you are logged in as: ' + user.name +" userid: " + user.id);
        } else console.log('Wrong username or password');
        
  
       setPw('')
       setUsername('')
       
    }
    
  return (
    <div>

        <form onSubmit={handleClick}>
            <label htmlFor="inputUsername" className="form-label">Brukernavn</label>
            <input 
                id='inputUsername'
                type="text" 
                className='form-control'
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
            
            <label htmlFor="inputPassword5" className="form-label">Passord</label>
            <input 
                id="inputPassword5"
                type="password" 
                className='form-control'
                required
                value={pw}
                onChange={(e) => setPw(e.target.value)}/>
               

            <button className='btn mt-2 btn-primary btn-sm'>Logg inn</button>
            {/* <div style={{color: 'red'}}>{errmsg}</div>     */}
            
           
        </form>
        <button onClick={offlineBtn} className='btn mt-2 btn-danger btn-sm'>Testmodus</button>
    </div>
  )
}

export default Login