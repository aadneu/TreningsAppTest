import React from 'react'
import {Chart} from 'react-google-charts';

const Lifetime = ({content}) => {

  


  const options = {
    title: "Aktiviteter",
  };

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  

 



  return (
    <div>
      <p>Totalt antall aktiviteter: {content.length}</p>
      <p>TEST TEST TEST</p>
        
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"200px"}
    />



    </div>
  )
}

export default Lifetime