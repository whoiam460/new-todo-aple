const removeTaskRecord = (state, payload) => {
  const taskId = payload
  const stateCopy = state

  const result = stateCopy.tasks.filter(list => {
    return list.taskId !== taskId
  })

  return { ...state, tasks: result }
}
export default removeTaskRecord
