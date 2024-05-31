"use client"

import { useEffect, useState } from "react"
import axios from "axios";

import Keyboard from "@/components/Keyboard";
import CircularProgress from '@mui/material/CircularProgress';

const alphabet = "abcdefghijklmnopqrstuvwxyz";

export default function Wordle() {
  const [isLoading , setIsLoading] = useState<boolean>(true);
  const [targetWord, setTargetWord] = useState<string>("");
  const [usedWords, setUsedWords] = useState<Array<string>>([]);
  const [currentWord, setCurrentWord] = useState<string>("");

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
    if (wordIdx === usedWords.length) {
      if (letterIdx < currentWord.length) {
        return currentWord[letterIdx]
      }
    } else if (wordIdx <= usedWords.length - 1) {
      if (letterIdx < usedWords[wordIdx].length) {
        return usedWords[wordIdx][letterIdx]
      }
    }
    return null
  }

  const updateCurrentWord = (letter: string) => {
    console.log([currentWord, targetWord])

    if (letter === "Backspace" && currentWord.length > 0) {
      setCurrentWord(word => word.substring(0, word.length - 2))

    } else if (currentWord.length < 5 && alphabet.includes(letter)) {
      setCurrentWord(word => word + letter)
      console.log(currentWord)

    } else if (letter === "Enter") {
      console.log(usedWords)
      let temp = [...usedWords]
      temp.push(currentWord)
      setUsedWords([...temp])
      setCurrentWord("")
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
        onClick={updateCurrentWord}
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