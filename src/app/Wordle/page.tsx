"use client"

import { useEffect, useState } from "react"
import axios from "axios";

import Keyboard from "@/components/Keyboard";
import CircularProgress from '@mui/material/CircularProgress';

export default function Wordle() {
  const [isLoading , setIsLoading] = useState<boolean>(true);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [targetWord, setTargetWord] = useState<string>("");

  const randomWordAPI: string = "https://random-word-api.herokuapp.com/word?length=5";
  const checkWordAPI: string = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  useEffect(() => {
    const getRandomWord = async () => {
      setIsLoading(true)
      const resp = await axios.get(randomWordAPI)
      setTargetWord(resp["data"][0])
      setIsLoading(false)
    }
  
    getRandomWord()
  }, [])

  return (
    <div className='Wordle'>
      <div className="words-container">
      {
        isLoading ?
          <CircularProgress className="m-auto"/>
        :
          <div>
          {
            [...Array(6)].map((el, i) => 
              <div className="word row" key={`word-${i}`}>
                {
                  [...Array(5)].map((el, i) => 
                    <CheckLetter key={`letter-${i}`}></CheckLetter>
                  )
                }
              </div>
            )
          }
          </div>
      }
      </div>
      <Keyboard
        onClick={() => {}}
      ></Keyboard>
    </div>
  )
}

function CheckLetter() {
  return (
    <div className="letter-border">

    </div>
  )
}