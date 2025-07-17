import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './components/Home/HomePage'
import { ThemeProvider } from './context/themeContext'
import { Dashboard } from './components/Home/dashboard'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
function App() {

  return (
    <div className='min-h-screen  bg-slate-200 dark:bg-gray-900'>
      <BrowserRouter>
      <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
