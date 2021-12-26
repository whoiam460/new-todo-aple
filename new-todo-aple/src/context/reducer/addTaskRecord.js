const addTaskRecord = (state, payload) => {
  const stateCopy = state
  const { id, task } = payload

  stateCopy.map(item => {
    console.log(item.id)
    if (item.id == id) {
      item.children.push(task)
    }
  })

  return [...stateCopy]
}

export default addTaskRecord
