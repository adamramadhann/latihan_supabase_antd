import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './page/Layout'
import Login from './page/auth/Login'
import Register from './page/auth/Register'

const App = () => {

  const [isLogin, setIsLogin] = useState(false)

  if(!isLogin) {
    return (
      <Routes>
       <Route path='/' element={<Login/>} />
       <Route path='/register' element={<Register/>} />
      </Routes>
     )
  }

  return(
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<h1>Ini Halaman Utama nya </h1>}/>
      </Route>
    </Routes>
  )
}

export default App