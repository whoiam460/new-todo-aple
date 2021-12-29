import firestoreService from '../../service/firebase/firestoreService'
const useTaskAction = dispatch => {
  const addTaskRecord = data => {
    const payload = data
    firestoreService.createDocument('tasks', payload.taskId, {
      taskId: payload.taskId,
      taskName: payload.taskName,
      flag: payload.flag,
      parentId: payload.parentId,
    })
    dispatch({
      type: 'addTaskRecord',
      payload,
    })
  }

  const removeTaskRecord = data => {
    const taskId = data
    firestoreService.deleteDocument('tasks', taskId)
    dispatch({
      type: 'removeTaskRecord',
      payload: taskId,
    })
  }

  const updateTaskRecord = (taskId, newTaskTitle, values) => {
    const { flagStatus } = values
    console.log(flagStatus);
    const payload = {
      taskId,
      newTaskTitle,
      values
    }
    firestoreService.updateDocument('tasks', taskId, {
      taskId: payload.taskId,
      taskName: newTaskTitle,
      flag: flagStatus,
      // parentId: payload.parentId,
    })
    dispatch({
      type: 'updateTaskRecord',
      payload,
    })
  }

  return { addTaskRecord, removeTaskRecord, updateTaskRecord }
}

export default useTaskAction
