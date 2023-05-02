import './App.css';
import Header from './Header/Header'
import Dashboard from './Dashboard/Dashboard'
import { useState } from 'react';
function App() {
  console.log('state change')
  const getDayOfWeek = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const currDate = new Date().getDay()
  const [temp, setTemp] = useState(999)
  const [wind, setWind] = useState(999)
  const date = getDayOfWeek[currDate]
  const [val,setVal] = useState(1)
  fetch('https://api.openweathermap.org/data/2.5/weather?'
    +`lat=${46}&lon=${104}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
    .then(res=>res.json()).then(data=>{
      setTemp(Math.round(data.main.temp - 273))
      setWind(data.wind.gust)
    })

  return (
    <div className="App">
      <Header/>
      <Dashboard date = {date} wind={wind} temp={temp}/>
    </div>
  );
}

export default App;
