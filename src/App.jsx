import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/home/HomePage'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>} >
    </Route>
   </Routes>
  )
}

export default App