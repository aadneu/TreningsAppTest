import React from 'react'

import Lifetime from './statistics/Lifetime'



const Statistics = ({content}) => {

  
  
  return (

       
    <div className=' p-1 m-1'>
      
      <h3 className='border-bottom mt-3'>Statistikk</h3>
      
      <Lifetime content={content}/>

    
    </div>
  )
}

export default Statistics