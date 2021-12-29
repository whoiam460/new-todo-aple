import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBHC6BfFg8whDHik-iM2c4_BP3FEbWmuGE',
  authDomain: 'apple-todo.firebaseapp.com',
  databaseURL: 'https://apple-todo-default-rtdb.firebaseio.com',
  projectId: 'apple-todo',
  storageBucket: 'apple-todo.appspot.com',
  messagingSenderId: '14568711473',
  appId: '1:14568711473:web:e2fc34b7337452f98e7c10',
}

const app = initializeApp(firebaseConfig)

export default app
