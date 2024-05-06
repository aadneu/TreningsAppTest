import React from 'react'
import Weekly from './statistics/Weekly'
import Monthly from './statistics/Monthly'
import Yearly from './statistics/Yearly'
import Lifetime from './statistics/Lifetime'



const Statistics = ({content}) => {

   

  
  
  return (

       
    <div className='border p-1 m-1'>
      
      <h3 className='border-bottom'>Statistikk:</h3>
      
      

    
   

      {/* {content.slice().map((x, id) => (
        <div key={id}>{x.activity} </div>
      ))} */}

    

      {/* <Weekly/>
      <Monthly/>
      <Yearly/> */}
      <Lifetime content={content}/>

    
    </div>
  )
}

export default Statistics