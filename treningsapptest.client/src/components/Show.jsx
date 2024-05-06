import React from 'react'
import useFetch from './useFetch'
import { useEffect,useState } from 'react'
import DisplayWorkouts from './DisplayWorkouts'
import Statistics from './Statistics'



const Show = ({userid}) => {

    // Denne komponenten inneholder "state" for appen, og videresender dette.

    let url =`https://localhost:7211/api/Workouts?userId=${userid}`
    if (userid === 'offline') {
        url = "http://localhost:5000/workouts"
    }
     
    const {data: content, fetchData, deleteFunction, postFunction} = useFetch()

    useEffect(()=> {
        fetchData(url)
    }, [])

   
    return (
    <div >
        {/* Denne komponenten viser siste treninger-data og innehar funksjoner for å legge til og slette treninger */}
        <DisplayWorkouts userid={userid} content={content} postFunction={postFunction} deleteFunction={deleteFunction}/>
        <Statistics content={content}/>
    </div>
  )
}

export default Show