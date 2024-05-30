"use client"

import { useEffect, useState } from "react"
import axios from "axios";

import CircularProgress from '@mui/material/CircularProgress';

export default function Wordle() {
  const [isLoading , setIsLoading] = useState<boolean>(true);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [targetWord, setTargetWord] = useState<string>("");

  const randomWordAPI: string = "https://random-word-api.herokuapp.com/word?length=5";
  const checkWordAPI: string = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  useEffect(() => {
    const getRandomWord = async () => {
      const word = await axios.get(randomWordAPI)
      console.log(word)
    }
  
    getRandomWord()
  }, [])

  return (
    <div className='Wordle'>
      {
        isLoading ?
          <CircularProgress className="m-auto"/>
        :
          <div></div>
      }
    </div>
  )
}