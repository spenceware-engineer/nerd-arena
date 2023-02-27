import { getAuth } from 'firebase/auth'
import { fbApp } from './firebaseApp'

export const { currentUser } = getAuth(fbApp)

