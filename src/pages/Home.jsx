//css
import "./Home.css"

//assets
import searchIcon from "../assets/search-outline.svg"

//hooks
import { useFetch } from "../hooks/useFetch"
import { useState } from "react"
import Loading from "../components/Loading"
import Error from "../components/Error"
import Temp from "../components/Temp/Temp"

const Home = () => {

  const [city, setCity] = useState("Brasil")
  const {getData, data, isLoading, error} = useFetch()


  const handleSubmit = (e)=> {
    e.preventDefault()
    getData(city)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <article className="flex column">

      {error && <Error error={error} />}

      <form>
        <label>
          Sua cidade
          <input value={city} type="text" onChange={e => setCity(e.target.value)} required/>
        </label>
        {/* <input className="btn" type="submit" value="search" /> */}
        <button className="btn">
          <img src={searchIcon} width="20" alt="" onClick={handleSubmit}/>
        </button>
      </form>

      <div className="card">
        {data && data.length != 0 && <Temp data={data} />}
      </div>

    </article>
  )
}

export default Home