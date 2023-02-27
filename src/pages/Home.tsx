import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>HOME PAGE</h1>
      <div>
        <Link to='/signin'><button>Sign In</button></Link>
      </div>
    </>
  )
}

export default Home
