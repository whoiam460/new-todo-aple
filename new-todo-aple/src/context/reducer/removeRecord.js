const removeRecord = (state, payload) => {
  const stateCopy = state
  const categoryId = payload
  const resultCategories = stateCopy.categories.filter(list => {
    return list.categoryId !== categoryId
  })

  const resultTasks = stateCopy.tasks.filter(item => {

    return item.parentId !== categoryId
  })

  return { ...state, categories: resultCategories, tasks: resultTasks }
}

export default removeRecord
