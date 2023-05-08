import './App.css';
import Header from './Header/Header'
import Dashboard from './Dashboard/Dashboard'
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import { useCallback } from 'react';
function App() {  
  const ranFetch = useRef('')
  const [currDate, setCurrDate] = useState(new Date().getDay())
  const [temp, setTemp] = useState(999)
  const [wind, setWind] = useState(999)
  const [val,setVal] = useState(1)
  const [data, setData] = useState([{
    exercise_name: 'None'
  }])
  let value=0
  useEffect(() => {
    console.log(process.env.REACT_APP_OPEN_WEATHER_API_KEY)
    if(ranFetch.current !== currDate){
      fetch('https://api.openweathermap.org/data/2.5/weather?'
      +`lat=${46}&lon=${104}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
      .then(res=>res.json()).then(data=>{
        setTemp(Math.round(data.main.temp - 273))
        setWind(data.wind.gust)
      })
      fetch('http://localhost:3000/activity/all-activities')
      .then(res=>res.json())
      .then(data=>{
        setData([...data])
      })
    }
    ranFetch.current = currDate
  },[currDate])
  const changeDay = useCallback((e) => {
    console.log('value is ',e.target.id)
    setCurrDate(currDate+parseInt(e.target.id))
  })
  value += 1
  return (
    <div className="App">
      <Header/>
      <Dashboard date = {currDate} wind={wind} temp={temp} setCurrDate={changeDay} data = {data}/>
    </div>
  );
}

export default App;
