import Rows1 from './Rows/Rows1'
import Rows2 from './Rows/Rows2'
const Dashboard = (props) => {
    return(
        <main>
        <Rows1 date = {props.date} temp={props.temp} wind={props.wind} setCurrDate={props.setCurrDate}/>
        <Rows2 data = {props.data}/>
      </main>
    )
}
export default Dashboard