const removeTaskRecord = (state, payload) => {
  const id = payload
  const stateCopy = state

  stateCopy.map(category => {
    return (category.children = category.children?.filter(task => {
      return task.id !== id
    }))
  })

  return [...stateCopy]
}
export default removeTaskRecord
