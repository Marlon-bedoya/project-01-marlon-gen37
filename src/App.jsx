
import { useState } from 'react'
import './App.css'
import getRamdonFromArray from './utils/getRamdonFromArray'
import phrases from './utils/phrases.json'
import arrImages from './utils/arrImages.json'
import PhrasesCard from './Components/PhrasesCard'
import ButtomP from './Components/ButtomP'

function App() {

  const intialValue = getRamdonFromArray(phrases)
  const [phrasesRamdon, setPhrasesRamdon] = useState(intialValue)

  const initialIamge = getRamdonFromArray(arrImages)
  const [imageSelected, setImageSelected] = useState(initialIamge)

  const objStyle = {
    backgroundImage: `url("/fondo${imageSelected}.png")`
 }

  return (
    <div className='app' style={objStyle}>
      <h1 className='app__title'>Galleta de la fortuna</h1>
      <article className='app__phrase'>
         <PhrasesCard 
         phrasesRandom={phrasesRamdon}
         />
      </article>
      <article className='app__Buttom'>
      <ButtomP 
      setPhrasesRandom={setPhrasesRamdon}
      setImageSelected={setImageSelected}
      />
      </article>
   </div>
  )
}

export default App
