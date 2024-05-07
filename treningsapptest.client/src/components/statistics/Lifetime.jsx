import React from 'react'
import {Chart} from 'react-google-charts';
import { useEffect, useState } from 'react';


const Lifetime = ({content}) => {

  //state for pie
  const [pieData, setPieData] = useState([]);
   
  //lager et array med hvor mange av hver aktivitet
  const countBy = (arr, prop) => arr.reduce((prev, curr) => (prev[curr[prop]] = ++prev[curr[prop]] || 1, prev), {}); 
  
  //stats
  const today = new Date();
  const firstDate = content.length ? content.sort((a, b) => new Date(a.date) - new Date(b.date))[0].date : "Loading..."
  const activityTotal = content.length;
  const activityDur = () => {
    let duration = 0;
      for(let item of content){
        duration += parseFloat(item.duration)
      }
      return duration
  }
  
    const fromFirstToToday = Math.abs(today-new Date(firstDate)) // fra første dato til i idag i millisek
    const Week = fromFirstToToday/(1000 * 60 * 60 * 24 * 7) // ms per uke
    const Month = fromFirstToToday/(1000 * 60 * 60 * 24 * 30.4375);

  useEffect(() => {
    const data = [['Aktivitet','Antall forekomster']]
    const pieObject = countBy(content, 'activity');
    for (const activity in pieObject) {
      if (pieObject.hasOwnProperty(activity)) {
        data.push([activity, pieObject[activity]]);
      }
    }
    setPieData(data)

  }, [content])
  
  return (
    <div>
      <div className='container'>
        <div className="row my-1">
          <div className="col">Totalt antall aktiviteter:</div>
          <div className="col text-end">{activityTotal}</div>
        </div>
        <div className="row my-1">
          <div className="col">Første logget aktivitet:</div>
          <div className="col text-end">{new Date(firstDate).toLocaleDateString('no-NO',{ weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })}</div>
        </div>
        <div className="row my-1">
          <div className="col">Total aktivitetstid:</div>
          <div className="col text-end"> {activityDur()} min // {(activityDur()/60).toFixed()} timer</div>
        </div>
        <div className="row my-1">
          <div className="col">Snitt per aktivitet:</div>
          <div className="col text-end">{(activityDur()/activityTotal).toFixed()} minutters</div>
        </div>
        <div className="row my-1">
          <div className="col">Aktiviteter per uke:</div>
          <div className="col text-end"> {(activityTotal/Week).toFixed(1)}</div>
        </div>
        <div className="row my-1">
          <div className="col">Aktiviteter per måned:</div>
          <div className="col text-end"> {(activityTotal/Month).toFixed(1)}</div>
        </div>
        
             <p>Fordeling:</p>
        <Chart
          chartType="PieChart"
          data={pieData}
          options={{title: 'Aktiviteter'}}
          width={"100%"}
          height={"200px"}
        />
      </div>
             
      

    </div>
  )

  } 
  
export default Lifetime