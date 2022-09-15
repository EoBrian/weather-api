import { useState, useEffect } from "react";
import axios from "axios";


export const useFetch = (url, state)=> {

  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)
  const [data, setData] = useState(new Array())

  useEffect(()=> {
   
    async function getData(){

      setError(null)
      setIsLoading(true)
  

      try {

        if (state === "GET") {
          await axios.get(url)
            .then( response => setData(response.data))
        }
  
      } catch (error) {
  
        setError(error.message)
  
      } finally {
  
        setIsLoading(null)
  
      }
    }

    getData()

  },[url, state])


  return {
    data,
    error,
    isLoading
  }
}