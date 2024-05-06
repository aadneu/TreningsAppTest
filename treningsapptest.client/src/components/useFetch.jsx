import { useState } from "react";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    
    
    const fetchData = async (url) => {
            try {
                const response =  await fetch(url)
                if (!response.ok){
                    throw new Error("could not get resårs")
                }
                const result = await response.json()

                setData(result);

            } catch (error) {
                
               setError(error)
        }
    }

    const deleteFunction = async (deleteurl, fetchurl, id ) => {
       try {
           const response = await fetch(deleteurl + id, {
                method: 'DELETE'
            })
            if (!response.ok){
                throw new Error("could not delete resårs")
            }
            console.log('workout deleted')
            await fetchData(fetchurl)
        } catch (error) {
            setError(error);
        }
    }
        
    const postFunction = async (posturl, fetchurl, workoutObject) => {    
        try {
            const response = await fetch(posturl, {
                method: 'POST',
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(workoutObject)
            });
            if (!response.ok) {
                throw new Error("Could not add workout");
            }
            console.log('Workout added');
            await fetchData(fetchurl)
        } catch (error) {
            setError(error);
        }
      };
    

    
      return {data, error, fetchData, deleteFunction, postFunction}
}

export default useFetch

//GET https://localhost:7108/api/WorkOut
//GETID https://localhost:7108/api/WorkOut/ID
//POST https://localhost:7108/api/WorkOut
//DELETE https://localhost:7108/api/WorkOut?id=ID
//PUT https://localhost:7108/api/WorkOut

