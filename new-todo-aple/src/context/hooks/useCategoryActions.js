import firestoreService from '../../service/firebase/firestoreService'
const useCategoryActions = dispatch => {
  const addRecord = data => {
    const payload = data
    firestoreService.createDocument('categories', payload.categoryId, {
      categoryId: payload.categoryId,
      categoryName: payload.categoryName,
    })
    dispatch({
      type: 'addRecord',
      payload,
    })
  }

  const removeRecord = data => {
    const { store, categoryId } = data
    const tasks = store.tasks
    firestoreService.deleteDocument('categories', categoryId)
    tasks.forEach(item => {
      if (item.parentId === categoryId) {
        firestoreService.deleteDocument('tasks', item.taskId)
      }
    })
    dispatch({
      type: 'removeRecord',
      payload: categoryId,
    })
  }

  const updateRecord = (categoryId, newTitle) => {
    const payload = {
      categoryId,
      newTitle,
    }
    firestoreService.updateDocument('categories', categoryId, {
      categoryId: categoryId,
      categoryName: newTitle,
    })
    dispatch({
      type: 'updateRecord',
      payload,
    })
  }

  return { addRecord, removeRecord, updateRecord }
}

export default useCategoryActions
