import BackspaceIcon from '@mui/icons-material/Backspace';

interface KeyboardProps {
  onClick: Function,
}

const qwertyKeyboard = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "bk"]
]
export default function Keyboard(props: KeyboardProps) {

  const keyContainer = (letter: string) => {
    if (letter === "bk") {
      return (
        <div 
          className={`large-key key-container keyboard-key-${letter}`} 
          key={`keyboard-key-${letter}`}
        >
          <BackspaceIcon className='m-auto'/>
        </div>
      )

    } else if (letter === "ENTER") {
      return (
        <div 
          className={`large-key key-container keyboard-key-${letter}`} 
          key={`keyboard-key-${letter}`}
        >
          <h1 className='m-auto'>{letter}</h1>
        </div>
      )

    } else {
      return (
        <div 
          className={`small-key key-container keyboard-key-${letter}`} 
          key={`keyboard-key-${letter}`}
        >
          <h1 className='m-auto' >{letter}</h1>
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