const addRecord = (state, payload) => {
  const stateCopy = state
  stateCopy.push(payload)

  return [...stateCopy]
}

export default addRecord
