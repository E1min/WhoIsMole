import { useState } from 'react'

import '/src/assets/css/App.css'
import '/src/assets/css/Responsive.css'

import Home from './components/Home'
import { Route, Routes } from 'react-router'
import Play from './components/Play'

function App() {

  return (
    <div>
      <Routes>

        <Route path='/' element={<Home/> } />
        <Route path='/play' element={<Play/> } />

      </Routes>
    </div>
  )
}

export default App
