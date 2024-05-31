import BackspaceIcon from '@mui/icons-material/Backspace';
import { useEffect } from 'react';

interface KeyboardProps {
  onClick: Function,
}

const qwertyKeyboard = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"]
]
export default function Keyboard(props: KeyboardProps) {
  const keyboardEvent = (e: any) => {
    props.onClick(e.key)
  }
  useEffect(() => {
    window.addEventListener("keydown", keyboardEvent)

    return () => {
      window.removeEventListener("keydown", keyboardEvent)
    }
  }, [])


  const keyContainer = (letter: string) => {
    if (letter === "Backspace") {
      return (
        <div 
          className={`large-key key-container keyboard-key-${letter}`} 
          key={`keyboard-key-${letter}`}
          onClick={() => {props.onClick(letter)}}
        >
          <BackspaceIcon className='m-auto'/>
        </div>
      )

    } else if (letter === "Enter") {
      return (
        <div 
          className={`large-key key-container keyboard-key-${letter}`} 
          key={`keyboard-key-${letter}`}
          onClick={() => {props.onClick(letter)}}
        >
          <h1 className='m-auto'>{letter.toUpperCase()}</h1>
        </div>
      )

    } else {
      return (
        <div 
          className={`small-key key-container keyboard-key-${letter}`} 
          key={`keyboard-key-${letter}`}
          onClick={() => {props.onClick(letter)}}
        >
          <h1 className='m-auto' >{letter.toUpperCase()}</h1>
        </div>
      )
    }
  }
  return (
    <div className="Keyboard">
      {
        qwertyKeyboard.map((keyboardRow, i) =>
          <div className="keyboard-row justify-center row" key={`qwerty-keyboard-row${i}`}>
            {
              keyboardRow.map(letter => 
                keyContainer(letter)
              )
            }
          </div>
        )
      }
    </div>
  )
}