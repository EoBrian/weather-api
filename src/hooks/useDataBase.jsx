//firebase
import { database } from "../firebase/config"
import { doc, setDoc, query, collection, onSnapshot, orderBy, Timestamp } from "firebase/firestore"

//hooks
import { useStateContext } from "../context/StateContext"
import { useState, useEffect } from "react"


export const useDataBase = (docName="projects")=> {
  const [cancelled, setCancelled] = useState(null)
  const [data, setData] = useState(null)
  const {setError, setIsLoading} = useStateContext()
 

  const collectionRef = collection(database, docName)

  function checkIfIsCancelled(){
    if(!cancelled) {
      return
    }
  }

  const writeData = async (data)=> {
    checkIfIsCancelled()
    setError(null)
    setIsLoading(true)

    try {
      await setDoc(doc(collectionRef), {
        createdAt: Timestamp.now(), ...data
      })

    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(null)
    }
  }

  //delele post with id
  const deleteDocument = async (id_post)=> {
    checkIfIsCancelled()
    setError(null)
    setIsLoading(true)

    try {
      await deleteDoc(doc(collection(db, docName), id_post))
    } catch (error) {
      setError("não foi possivel deletar essa publicação no momento!")
    } finally {
      setIsLoading(false)
    }
  }
  
  useEffect(()=> {
    
    const getData = async()=> {
      let q = await query(collectionRef, orderBy("createdAt", "desc"))
      await onSnapshot(q, (querySnapshot)=> setData(
        querySnapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
      ))
    }

    getData()
  },[])
  
  useEffect(()=> {
    setCancelled(true)
  },[])

  return {
    writeData,
    data
  }
}