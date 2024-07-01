import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import Login from "./Login"
import Home from './Home'


function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Navigate  to="/Signup/"/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
