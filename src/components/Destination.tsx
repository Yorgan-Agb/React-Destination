import React, { useState, useEffect } from 'react'
import { Switch } from 'antd'
import 'antd/dist/antd.css'
import '../components/style/destination.css'
import data from '../assets/data.json'

const Destination = () => {
  const [toogle, setToogle] = useState(false)
  const toogler = () => {
    toogle ? setToogle(false) : setToogle(true)
  }

  const datasArray: any = data

  localStorage.setItem('datas', JSON.stringify(datasArray))
  let pays = localStorage.getItem('datas')
  console.log(datasArray)

  let destinationLocalStorage: any = JSON.parse(
    localStorage.getItem('datas') || '[]'
  )

  // destinationLocalStorage.push({
  //   id: 10,
  //   image: 'https://www.zupimages.net/up/22/18/ntz8.png',
  //   nom: 'Lomé',
  //   description: 'Rådhuspladsen 1, 1550 København, Denmark',
  //   habitant: '3.4M',
  //   hotel: '500',
  //   revenu: '70 000',
  //   superficie: '88.25',
  // })
  // localStorage.setItem('datas', JSON.stringify(destinationLocalStorage))

  console.log(destinationLocalStorage)

  return (
    <>
      <div className='testContainer'>
        <h2 className='titleDestination'>Destination</h2>
        <div className='destinationContainer'>
          {destinationLocalStorage.map((datas: any) => (
            <div className='countryContainer' key={datas.id}>
              <div
                className='imgCountry'
                style={{ backgroundImage: `url(${datas.image})` }}
              ></div>
              <div className='firstContainer'>
                <div className='containerDescription'>
                  <h2>{datas.nom}</h2>
                  <p>{datas.description}</p>
                </div>
                <div className='switchContainer'>
                  <Switch className='testwe' onClick={toogler} />
                </div>
              </div>
              <div className='separation'></div>
              <div className='bottomContainer'>
                <div className='infoContainer'>
                  <p className='numbers'>{datas.habitant}</p>
                  <p>Habitants</p>
                </div>
                <div className='infoContainer'>
                  <p className='numbers'>{datas.hotel}</p>
                  <p>Hôtels</p>
                </div>
                <div className='infoContainer'>
                  <p className='numbers'>{datas.revenu}</p>
                  <p>Revenu Moy</p>
                </div>
                <div className='infoContainer'>
                  <p className='numbers'>{datas.superficie}</p>
                  <p>km²</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Destination
