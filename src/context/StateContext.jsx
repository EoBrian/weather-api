import { createContext, useContext, useState } from "react";

export const StateContext = createContext()

export const StateProvider = ({children}) => {

  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)

  return (
    <StateContext.Provider value={{isLoading, setIsLoading, error, setError}}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = ()=> {
  return useContext(StateContext)
}