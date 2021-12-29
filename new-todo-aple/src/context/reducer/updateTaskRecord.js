const updateTaskRecord = (state, payload) => {
  const { taskId, newTaskTitle, values } = payload
  const {flagStatus} = values
  // console.log(payload);
  const stateCopy = state

  stateCopy.tasks.filter(item => {
    if (item.taskId === taskId) {
      item.taskName = newTaskTitle
      item.flag = flagStatus
    }
    
    return item
  })

  return { ...stateCopy }
}
export default updateTaskRecord
