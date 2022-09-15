//hooks
import { useEffect, useState } from "react"

//firebase
import { auth } from "../firebase/config"
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"


export const useAuthentication = ()=> {

  const [user, setUser] = useState(null)
  const [cancelled, setCancelled] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)


  function checkIfIsCancelled (){
    if(cancelled) {
      return
    }
  }

  useEffect(()=> {
    setCancelled(true)
  }, [])


  const setAuth = async (email, password)=> {
    checkIfIsCancelled()
    setError(null)
    setIsLoading(true)
    
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {      
      error.message && setError("email/senha não correspondente!")     
    } finally {
      setIsLoading(null)
    }
  }


  useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if(user) {
        setUser(user)
      }
    })
  }, [auth])


  return {
    setAuth,
    error,
    isLoading,
    user
  }
}
