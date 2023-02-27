import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Time from './pages/Time'
import './App.css'
import Profile from './pages/Profile'
import Auth from './pages/Auth'
import LeaderBoard from './pages/LeaderBoard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/time' element={<Time />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Auth />} />
        <Route path='/signup' element={<Auth />} />
        <Route path='/leaders' element={<LeaderBoard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
