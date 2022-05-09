import React, { useContext, useState } from 'react'
import './App.css'
import Destination from './components/Destination'
import Modal from './components/Modal'
// import DataProvider from './context/DestinationContext'

function App() {
  // const [toogle, setToogle] = useState<boolean>(false)
  return (
    <div className='App'>
      {/* <DataProvider> */}
      <Modal />
      <Destination />
      {/* </DataProvider> */}
    </div>
  )
}

export default App
