import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDVLoxzhpqK3qOENAhZqMtRNnyiuQpNixo",
  authDomain: "my-firebase-react-auth-f5b50.firebaseapp.com",
  projectId: "my-firebase-react-auth-f5b50",
  storageBucket: "my-firebase-react-auth-f5b50.firebasestorage.app",
  messagingSenderId: "847032944829",
  appId: "1:847032944829:web:7814f9b97be83512e68fd4",
  measurementId: "G-2QG7774ST2"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export default app