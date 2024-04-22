import getRamdonFromArray from "../utils/getRamdonFromArray"
import phrases from '../utils/phrases.json'
import arrImages from '../utils/arrImages.json'
import './Styles/ButtomP.css'


const ButtomP = ({ setPhrasesRandom, setImageSelected }) => {

  const handleclick = () => {

    const phrase = getRamdonFromArray(phrases)
    setPhrasesRandom(phrase)

    const background = getRamdonFromArray(arrImages)
    setImageSelected(background)

  }

  


  return (
    <button className='app__Buttom' onClick={handleclick}>Probar mi suerte</button> 
  )
}

export default ButtomP