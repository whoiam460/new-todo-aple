import firebase from 'firebase/app'
import 'firebase/database'



const firebaseConfig = {
  apiKey: "AIzaSyBHC6BfFg8whDHik-iM2c4_BP3FEbWmuGE",
  authDomain: "apple-todo.firebaseapp.com",
  databaseURL: "https://apple-todo-default-rtdb.firebaseio.com",
  projectId: "apple-todo",
  storageBucket: "apple-todo.appspot.com",
  messagingSenderId: "14568711473",
  appId: "1:14568711473:web:e2fc34b7337452f98e7c10"
};

firebase.initializeApp(firebaseConfig)

const databaseRef = firebase.database().ref()

export const notesRef = databaseRef.child('notes')
export default firebase