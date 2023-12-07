import { useState } from 'react'

import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import List from './Pages/List/List'
import Single from './Pages/Single/Single' 
import New from './Pages/New/New'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {


  return (
   <Router>
    <Routes>
      <Route path="/"> 
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='users'>
          <Route index element={<List />}/>
          <Route path=':userId' element={<Single />}/>
          <Route path='new' element={<New />}/>
        </Route>
        <Route path='products'>
          <Route index element={<List />}/>
          <Route path=':productId' element={<Single />}/>
          <Route path='new' element={<New />}/>
        </Route>
      </Route>
    </Routes>
   </Router>
  )
}

export default App
