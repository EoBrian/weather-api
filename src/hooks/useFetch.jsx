import { useState, useEffect } from "react";
import axios from "axios";


export const useFetch = ()=> {

  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)
  const [data, setData] = useState(new Array())
  const [img, setImg] = useState(null)

   
  async function getData(city){

    const url = `https://api.weatherapi.com/v1/forecast.json?key=c103b13b6e09423b963204449221509&q=${city}&days=1`
    const imgUrl = `https://pixabay.com/api/?key=27633255-2b894c0868744261fc3e7d2e4&q=${city}&image_type=photo&pretty=true`
    setError(null)
    setIsLoading(true)


    try { 
      //get Img from city
      await axios.get(imgUrl).then(response => setImg(response.data.hits[1].largeImageURL))
      //get data in weather API
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
    isLoading,
    img
  }
}