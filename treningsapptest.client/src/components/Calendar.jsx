import React from 'react'
import Calendar from 'react-calendar'

const Calendar = () => {
  return (
    <div>
        <Calendar onChange={onChange} value={value} />
    </div>
  )
}

export default Calendar