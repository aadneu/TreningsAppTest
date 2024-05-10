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
    <div className='container'>

        <form className=' ' onSubmit={handleClick}>
         
            <h3>Aktivitetslogger</h3>
            <div class="form-floating mb-3">
            <input 
                required
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Brukernavn</label>
            </div>
            <div class="form-floating">
            <input 
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Passord</label>
            </div>
               

            <button className='btn mt-2 btn-primary btn-sm'>Logg inn</button>
            {/* <div style={{color: 'red'}}>{errmsg}</div>     */}
            
           
        </form>
        <button onClick={offlineBtn} className='btn mt-2 btn-danger btn-sm'>Testmodus</button>
    </div>
  )
}

export default Login