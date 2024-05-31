"use client"

import { useEffect, useState } from "react"
import axios from "axios";

import Keyboard from "@/components/Keyboard";
import CircularProgress from '@mui/material/CircularProgress';

const alphabet = "abcdefghijklmnopqrstuvwxyz";

export default function Wordle() {
  const [isLoading , setIsLoading] = useState<boolean>(true);
  const [targetWord, setTargetWord] = useState<string>("");
  const [currentWords, setCurrentWords] = useState<Array<string>>([""]);

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

  const getCorrectLetter = (wordIdx: number, letterIdx: number) => {
    if (wordIdx <= currentWords.length - 1) {
      if (letterIdx <= currentWords[wordIdx].length - 1) {
        return currentWords[wordIdx][letterIdx]
      }
    }
    return null
  }

  const updateCurrentWords = (letter: string) => {
    let i = currentWords.length - 1
    if (letter === "Backspace") {
      setCurrentWords(currentWords.map((word, idx) => {
        if (idx === i) {
          return word.substring(0, word.length - 1)
        }
        return word
      }))

    } else if (alphabet.includes(letter) && currentWords[i].length < 5) {
      console.log(letter)
      console.log(currentWords)
      setCurrentWords(currentWords.map((word, idx) => {
        if (idx === i) {
          return word + letter
        } 
        return word
      }))
    }
  }

  return (
    <div className='Wordle'>
      <div className="words-container">
      {
        isLoading ?
          <CircularProgress className="m-auto"/>
        :
          <div>
          {
            [...Array(6)].map((el, wordIndex) => 
              <div className="word row" key={`word-${wordIndex}`}>
                {
                  [...Array(5)].map((el, letterIndex) => 
                    <CheckLetter key={`letter-${letterIndex}`} letter={getCorrectLetter(wordIndex, letterIndex)}></CheckLetter>
                  )
                }
              </div>
            )
          }
          </div>
      }
      </div>
      <Keyboard
        onClick={updateCurrentWords}
      ></Keyboard>
    </div>
  )
}

interface CheckLetterProps {
  letter: string | null
}

function CheckLetter(props: CheckLetterProps) {
  return (
    <div className="letter-border">
      {props.letter}
    </div>
  )
}