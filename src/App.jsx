//css
import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'

//hooks
import { useFetch } from './hooks/useFetch'

//components
import Error from "./components/Error"
import Temp from "./components/Temp/Temp"

//assets
import searchIcon from "./assets/search-outline.svg"


function App() {
  const [city, setCity] = useState("Brasil")
  const {getData, data, isLoading, error, img} = useFetch()

  const handleSubmit = ()=> {
    getData(city)
  }

  useEffect(()=> {
    getData(city)
  },[])



  if (isLoading) {
    return <Loading />
  }


  return (
    <>
      <main className="container" style={{backgroundImage:  `url(${img})`}}>

        <article className="flex column">
          <form className="flex" onSubmit={(e)=> e.preventDefault()}>
            <input value={city} type="text" onChange={e => setCity(e.target.value)} required placeholder="Busque por sua cidade..."/>

            {/* <input className="btn" type="submit" value="search" /> */}
            <button className="btn">
              <img src={searchIcon} width="20" alt="" onClick={handleSubmit}/>
            </button>
          </form>

          {
            !error ? (
              <div className="card">
                {data && data.length != 0 && <Temp data={data} />}
              </div>
            ) : (
              error && <Error error={error} />
            )
          }
        </article>

      </main>
    </>
  )
}

export default App
