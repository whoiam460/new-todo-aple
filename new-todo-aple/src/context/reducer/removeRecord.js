const removeRecord = (state, payload) => {
  const id = payload
  const stateCopy = state
  const result = stateCopy.filter(list => {
    return list.id !== id
  })
  return [...result]
}

export default removeRecord
