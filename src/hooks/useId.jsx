import { useState } from "react"

export const useId = ()=> {
  let idArray = new Array()
  const Chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
  
  for (let i = 0; i < 20; i++) {
    let random_chars = Math.floor(Math.random() * Chars.length)
    idArray.unshift(Chars[random_chars])
  }

  const id = idArray.join("")

  return {id}
}