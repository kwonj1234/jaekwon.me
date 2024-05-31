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

  useEffect(() => {
    const handleKeyboardEvent = (e: any) => {
      if (e.key === "Backspace" && currentWord.length > 0) {
        setCurrentWord(word => {
          console.log(`delete: ${word}`)
          return word.substring(0, word.length - 1)
        })
        console.log(currentWord)
  
      } else if (currentWord.length < 5 && alphabet.includes(e.key)) {
        console.log(currentWord.length)
        setCurrentWord(word => {
          console.log(`old word: ${word}`)
          console.log(`new word: ${word + e.key}`)
          return word + e.key
        })
  
      } else if (e.key === "Enter") {
        console.log(usedWords)
        let temp = [...usedWords]
        temp.push(currentWord)
        setUsedWords([...temp])
        setCurrentWord("")
      }
    }
    window.addEventListener("keydown", handleKeyboardEvent)

    return () => {
      window.removeEventListener("keydown", handleKeyboardEvent)
    }
  }, [currentWord, usedWords])

  useEffect(() => {
    console.log(currentWord)
  }, [currentWord])

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
    console.log(`${currentWord} ${letter}`)
    if (letter === "Backspace" && currentWord.length > 0) {
      setCurrentWord(word => {
        console.log(`delete: ${word}`)
        return word.substring(0, word.length - 1)
      })
      console.log(currentWord)

    } else if (currentWord.length < 5 && alphabet.includes(letter)) {
      console.log(currentWord.length)
      setCurrentWord(word => {
        console.log(`old word: ${word}`)
        console.log(`new word: ${word + letter}`)
        return word + letter
      })

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