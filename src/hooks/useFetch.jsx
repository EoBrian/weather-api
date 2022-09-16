import { useState, useEffect } from "react";
import axios from "axios";


export const useFetch = ()=> {

  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)
  const [data, setData] = useState(new Array())


   
  async function getData(city){

    const url = `http://api.weatherapi.com/v1/forecast.json?key=c103b13b6e09423b963204449221509&q=${city}&days=1`
    setError(null)
    setIsLoading(true)


    try {   

      await axios.get(url)
        .then( response => setData(response.data))

    } catch (error) {

      setError(error.message)

    } finally {

      setIsLoading(null)

    }
  }


  return {
    getData,
    data,
    error,
    isLoading
  }
}