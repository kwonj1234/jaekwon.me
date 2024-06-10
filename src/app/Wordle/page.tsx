"use client"

import { useEffect, useState } from "react"
import axios from "axios";

import Keyboard from "@/components/Keyboard";
import CircularProgress from '@mui/material/CircularProgress';

const alphabet = "abcdefghijklmnopqrstuvwxyz";

export default function Wordle() {
  const [isLoading , setIsLoading] = useState<boolean>(true);
  const [targetWord, setTargetWord] = useState<string>("");
  const [deconstructedWord, setDeconstructedWord] = useState<Object>({});
  const [usedWords, setUsedWords] = useState<Array<string>>([]);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [apiError, setAPIError] = useState<boolean>(false);

  const randomWordAPI: string = "https://random-word-api.herokuapp.com/word?length=5";
  const checkWordAPI: string = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  useEffect(() => {
    const getRandomWord = async () => {
      setIsLoading(true)

      let resp;
      try {
        resp = await axios.get(randomWordAPI)
        setTargetWord(resp["data"][0])

        // Deconstruct the target word and save the deconstructed word
        type tempObject = { [key: string]: number};
        let temp: tempObject = {}
        for (let i = 0; i < resp["data"][0].length; i++) {
          if (resp["data"][0][i] in temp) {
            temp[resp["data"][0][i]] += 1;
          } else {
            temp[resp["data"][0][i]] = 1;
          }
        }
        setDeconstructedWord(prev => {
          return { ...temp }
        });

      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    }
  
    getRandomWord()
    console.log(deconstructedWord)
  }, [])

  useEffect(() => {
    console.log(targetWord);
    console.log(deconstructedWord)
  }, [deconstructedWord, targetWord])
  useEffect(() => {
    const isCurrentWordValid = async () => {
      let resp;
      try {
        resp = await axios.get(checkWordAPI + currentWord)
        console.log(resp)
        return true
      } catch (err) {
        console.log(err)
        return false
      }
    }

    const handleKeyboardEvent = async (e: any) => {
      if (e.key === "Backspace" && currentWord.length > 0) {
        setCurrentWord(word => {
          return word.substring(0, word.length - 1)
        })
  
      } else if (currentWord.length < 5 && alphabet.includes(e.key)) {
        setCurrentWord(word => {
          return word + e.key
        })
  
      } else if (e.key === "Enter") {
        if (currentWord.length === 5) {
          let isValidWord = await isCurrentWordValid()

          if (isValidWord) {
            let temp = [...usedWords]
            temp.push(currentWord)
            setUsedWords([...temp])
            setCurrentWord("")
          }
        }
      }
    }
    window.addEventListener("keydown", handleKeyboardEvent)

    return () => {
      window.removeEventListener("keydown", handleKeyboardEvent)
    }
  }, [currentWord, usedWords])

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
    if (letter === "Backspace" && currentWord.length > 0) {
      setCurrentWord(word => {
        return word.substring(0, word.length - 1)
      })

    } else if (currentWord.length < 5 && alphabet.includes(letter)) {
      setCurrentWord(word => {
        return word + letter
      })

    } else if (letter === "Enter") {
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
                    <CheckLetter 
                      key={`letter-${(5*wordIndex) + letterIndex}`} 
                      letter={getCorrectLetter(wordIndex, letterIndex)}

                    ></CheckLetter>
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
    <div className="letter-card letter-border">
      <div className="letter-card-content">
        <div className="front">
          <h1>{props.letter?.toUpperCase()}</h1>
        </div>
      </div>
    </div>
  )
}