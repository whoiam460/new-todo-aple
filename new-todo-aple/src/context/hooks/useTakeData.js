import { collection } from 'firebase/firestore'

const useTakeData = dispatch => {
  const takeData = collection => {
      const payload = collection
    dispatch({
      type: 'takeData',
    payload
    })
  }
  return takeData
}

export default useTakeData
