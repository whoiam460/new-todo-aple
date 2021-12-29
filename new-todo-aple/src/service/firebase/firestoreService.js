import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  query,
  getDoc,
  getDocs,
  orderBy,
  limit,
  where,
  deleteDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBHC6BfFg8whDHik-iM2c4_BP3FEbWmuGE',
  authDomain: 'apple-todo.firebaseapp.com',
  databaseURL: 'https://apple-todo-default-rtdb.firebaseio.com',
  projectId: 'apple-todo',
  storageBucket: 'apple-todo.appspot.com',
  messagingSenderId: '14568711473',
  appId: '1:14568711473:web:e2fc34b7337452f98e7c10',
}

initializeApp(firebaseConfig)

const db = getFirestore()

const createDocument = async (collectionPath, id, documentData) => {
  const ref = doc(db, collectionPath, id)
  const result = await setDoc(ref, documentData)
  return result
}

const updateDocument = async (collectionPath, id, documentData) => {
  const ref = doc(db, collectionPath, id)
  const result = await updateDoc(ref, documentData)
  return result
}

const getDocument = async (collectionPath, id) => {
  const ref = doc(db, collectionPath, id)
  const docSnapshot = await getDoc(ref)
  return docSnapshot.data()
}

const queryDocuments = async (
  collectionPath,
  queries,
  orderByRule,
  limitRule
) => {
  const ref = collection(db, collectionPath)
  const queriesExtended = queries && queries.map(q => where(...q))
  orderByRule && queriesExtended.push(orderBy(...orderByRule))
  limitRule && queriesExtended.push(limit(limitRule))
  const q = queriesExtended ? query(ref, ...queriesExtended) : query(ref)
  const querySnapshot = await getDocs(q)
  let result = []
  querySnapshot.forEach(doc => {
    result.push(doc.data())
  })
  return result
}

const getTimestamp = () => serverTimestamp()

const getId = collectionPath => {
  const ref = doc(collection(db, collectionPath))
  return ref.id
}

const deleteDocument = async (collectionPath, id) => {
  const result = await deleteDoc(doc(db, collectionPath, id))
  return result
}

const firestoreService = {
  createDocument,
  updateDocument,
  getDocument,
  queryDocuments,
  deleteDocument,
  getTimestamp,
  getId,
}

export default firestoreService
