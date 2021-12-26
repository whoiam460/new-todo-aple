const updateRecord = (state, payload) => {
  const { id, newTitle } = payload
  const stateCopy = state

  stateCopy.filter(item => {
    if (item.id === id) {
      item.name = newTitle
    }
    return item
  })
  return [...stateCopy]
}
export default updateRecord
