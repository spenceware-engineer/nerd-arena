import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Placeholder text='Route: /' />} />
        <Route path='/mix' element={<Placeholder text='Route: /mix' />} />
        <Route path='/rec-time' element={<Placeholder text='Route: /rec-time' />} />
        <Route path='/profile' element={<Placeholder text='Route: /profile' />} />
      </Routes>
    </BrowserRouter>
  )
}

interface PlaceholderProps {
  text: string
}

const Placeholder = ({ text }: PlaceholderProps) => {
  return (
    <p>PLACEHOLDER <strong>{text}</strong></p>)
}

export default App
