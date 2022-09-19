import "./Temp.css"


const Temp = ({data}) => {

  const {location:state, current, forecast} = data

  return (
    <>
      <div className="location">
        <h1>{state.country}</h1>
        <h2>{`${state.region}/${state.name}`}</h2>
        <p className='hours'>{state.localtime}</p>
      </div>

      <div className="current">
        <div className="condition">
          <p>{current.condition.text}</p>
          <figure>
            <img src={current.condition.icon} alt="icon weather" />
            <p>{current.temp_c}ºC</p>
          </figure>
        </div>  
      </div>

      <ul className="firecast">
        {
          forecast.forecastday[0].hour.map((e, i)=> (
            <li key={i} className={e.time.split(" ")[1].split(":")[0] >= 7 && e.time.split(" ")[1].split(":")[0] <= 18 ? "morning card-box" : "night card-box"}>  
              <p>{e.temp_c}ºC</p>
              <figure>
                <img src={e.condition.icon} alt={e.condition.text} />
              </figure>
              <p className="hour">{e.time.split(" ")[1]}</p>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Temp