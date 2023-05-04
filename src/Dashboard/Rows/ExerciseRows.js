
const ExerciseRows = (props) => {
    const {distance, distance_unit, start_time,stop_time, exercise_type} = props
    const duration = new Date(stop_time-start_time)
    const start = new Date(start_time)
    
  return (
    <div className='exercise-details'>
        <div><div>Distance: {distance} {distance_unit}</div><div>Start: {start.toLocaleTimeString()}</div></div>
        <div><div>{Math.round(distance/duration*3600)}</div>
        <div>Duration: {duration.getHours()}:{String(duration.getMinutes()).padStart(2,'0')}:{String(duration.getSeconds()).padStart(2,'0')}</div></div>
    </div>
  )
}

export default ExerciseRows