import React from 'react'
import { getAuth } from 'firebase/auth'
import { fbApp } from '../utils/auth/firebaseApp'

const SignOutButton = async () => {
  const handleSignOut = async () => {
    await getAuth(fbApp).signOut()
  }

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  )
}

export default SignOutButton
