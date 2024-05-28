
import React from 'react'
import './App.css'
import Topheader from './components/Topheader'
import Header from './components/Header'
import Note from './components/Note'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
     
     <Topheader />
     <Header />
     <Note />
      <Footer />
     
    </div>
  )
}

export default App