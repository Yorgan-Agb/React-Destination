import React, { useState, useContext } from 'react'
import '../components/style/modal.css'
import { Switch } from 'antd'
import 'antd/dist/antd.css'
import useInput from '../hooks/useInput'
// import DataProvider from '../context/DestinationContext'
import datas from '../assets/data.json'

const Modal = () => {
  const destination = useInput('')
  const adresse = useInput('')
  const url = useInput('')
  const nbHabitant = useInput('')
  const nbHotels = useInput('')
  const revenu = useInput('')
  const superficie = useInput('')

  const [isOpen, setIsOpen] = useState(false)

  let submitForm = (event: any) => {
    event.preventDefault()
    console.log('destination', destination.value)
    console.log('adresse', adresse.value)
    console.log('url', url.value)
    console.log('nbHabitant', nbHabitant.value)
    console.log('nbHotels', nbHotels.value)
    console.log('revenu', revenu.value)
    console.log('superficie', superficie.value)

    let destinationLocalStorage: any = JSON.parse(
      localStorage.getItem('datas') || '[]'
    )

    destinationLocalStorage.push({
      id: Math.floor(Math.random() * 10),
      image: url.value,
      nom: destination.value,
      description: adresse.value,
      habitant: nbHabitant.value,
      hotel: nbHotels.value,
      revenu: revenu.value,
      superficie: superficie.value,
    })
    localStorage.setItem('datas', JSON.stringify(destinationLocalStorage))
    console.log(destinationLocalStorage)
  }

  // const { datas } = useContext(DataProvider)

  return (
    <>
      <div className='buttonContainer'>
        <button className='buttonModal' onClick={() => setIsOpen(!isOpen)}>
          + Ajouter
        </button>
      </div>
      <div className='holderModal'>
        <div className={`containerModal ${isOpen ? 'active' : ''}`}>
          <h2 className='titleModal'>Ajouter une nouvelle destination</h2>
          <div className='destinationModal'>
            <div className='testInput'>
              <input
                className='textInput'
                type='text'
                placeholder='Nom de la destination'
                {...destination}
              />
            </div>
            <div className='testInput'>
              <input
                className='textInput'
                type='text'
                placeholder='Adresse'
                {...adresse}
              />
            </div>
            <div className='testInput'>
              <input
                className='textInput'
                type='text'
                placeholder="Lien de l'image"
                {...url}
              />
            </div>
          </div>
          <div className='bottomModalContainer'>
            <div className='bottomModalText'>
              <input
                className='bottomText'
                type='text'
                placeholder="Nb d'habitants"
                {...nbHabitant}
              />
            </div>
            <div className='bottomModalText'>
              <input
                className='bottomText'
                type='text'
                placeholder='Nb.Hôtels'
                {...nbHotels}
              />
            </div>
            <div className='bottomModalText'>
              <input
                className='bottomText'
                type='text'
                placeholder='Revenu Moy'
                {...revenu}
              />
            </div>
            <div className='bottomModalText'>
              <input
                className='bottomText'
                type='text'
                placeholder='Superficie'
                {...superficie}
              />
            </div>
          </div>
          <div className='buttonActiveModal'>
            <p>Activer</p>
          </div>
          <div className='bottomModalButton'>
            <div className='cancelButtonContainer'>
              <p className='cancelButton' onClick={() => setIsOpen(!isOpen)}>
                CANCEL
              </p>
            </div>
            <div className='confirmButtonContainer'>
              <p onClick={submitForm} className='confirmButton'>
                CONFIRM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
