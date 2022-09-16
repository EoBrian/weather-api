import React from 'react'

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
        <div className="temp">
          <p>{current.temp_c}ºC</p>
        </div>
        <div className="condition">
          <p>{current.condition.text}</p>
          <figure>
            <img src={current.condition.icon} alt="icon weather" />
          </figure>
        </div>  
      </div>

      <ul className="firecast">
        {
          forecast.forecastday[0].hour.map((e, i)=> (
            <li key={i}>
              <p className="hour">{e.time}</p>
              <p>{e.temp_c}ºC</p>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Temp