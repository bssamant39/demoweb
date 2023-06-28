import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Reservation from './Pages/Reservation'
import Nav from './Components/Nav'
import Menu from './Pages/Menu'
import Gallery from './Pages/Gallery'
import Location from './Pages/Location'
import News from './Pages/News'
import Staff from './Pages/Staff'
import Blogs from './Pages/Blogs'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/reservation' element={<Reservation />}>Reservation </Route>
        <Route path='/menu' element={<Menu />}>Reservation </Route>
        <Route path='/gallery' element={<Gallery />}>Gallery </Route>
        <Route path='/location' element={<Location />}>Location</Route>
        <Route path='/news' element={<News />}>News</Route>
        <Route path='/staff' element={<Staff />}>Our Staff</Route>
        <Route path='/blog' element={<Blogs />}>Blogs</Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App