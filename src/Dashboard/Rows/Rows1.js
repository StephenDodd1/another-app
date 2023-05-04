import { useEffect } from "react"

function Rows1 (props) {
    const getTempColor=()=>{
        if(props.temp >= 30){
            return 'red weather-stat'
        }
        else if (props.temp >= 20){
            return 'green weather-stat'
        } else {
            return 'blue weather-stat'
        }
    }
    const getDayOfWeek = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const date = getDayOfWeek[props.date]
  
    return(
        <div id='row-1'>
            <div id='box-1'><div className='weather-stat'>{props.wind}</div></div>
            <div id='box-2'>
                <div id='dash-date' className="white h1 bold">
                    <div onClick={() => props.setCurrDate(props.date - 1)}>{'<'}</div>
                        {date}
                    <div onClick={() => props.setCurrDate(props.date + 1)}>{'>'}</div>
                </div>
            </div>
          <div id='box-3'><div className={getTempColor()}>{props.temp}&deg;</div></div>
        </div>
    )
}
export default Rows1