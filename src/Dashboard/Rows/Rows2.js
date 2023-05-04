import ExerciseRows from "./ExerciseRows"

const Rows2 = (data) => {
    console.log(data.data)
    return ( 
        <div id='row-2'>
            <div id ='left'>
                {data.data?.map((row,i) => {
                    return(
                    <div className={i%2 ? "exercise-row bg-gray" : "exercise-row bg-white"}>
                        <div>{row.exercise_name}</div>
                        <ExerciseRows {...row} />
                    </div>
                    )}
                )}
            </div>
            <div id ='right'></div>
        </div>
    )
}

export default Rows2