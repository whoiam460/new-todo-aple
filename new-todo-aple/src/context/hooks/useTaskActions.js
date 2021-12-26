const useTaskAction = dispatch => {
  const addTaskRecord = (id, task) => {
    const payload = { id, task }
    dispatch({
      type: 'addTaskRecord',
      payload,
    })
  }

  const removeTaskRecord = id => {
    const payload = id
    dispatch({
      type: 'removeTaskRecord',
      payload,
    })
  }

  const updateTaskRecord = (id, newTaskTitle) => {
    const payload = {
      id,
      newTaskTitle,
    }
    dispatch({
      type: 'updateTaskRecord',
      payload,
    })
  }

  return { addTaskRecord, removeTaskRecord, updateTaskRecord }
}

export default useTaskAction
