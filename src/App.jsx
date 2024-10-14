import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import { Routes, Route } from 'react-router-dom'
import DetailCard from './Components/DetailCard'
import AddCardForm from './Components/AddCardForm'
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/addCards' element={<AddCardForm></AddCardForm>}></Route>
        <Route path='/detailCard/:id' element={<DetailCard></DetailCard>}></Route>
      </Routes>
    </>
  )
}

export default App