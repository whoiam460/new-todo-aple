const useCategoryActions = dispatch => {
  const addRecord = data => {
    const payload = data
    dispatch({
      type: 'addRecord',
      payload,
    })
  }

  const removeRecord = data => {
    const payload = data
    dispatch({
      type: 'removeRecord',
      payload,
    })
  }

  const updateRecord = (id, newTitle) => {
    const payload = {
      id,
      newTitle,
    }
    dispatch({
      type: 'updateRecord',
      payload,
    })
  }

  return { addRecord, removeRecord, updateRecord }
}

export default useCategoryActions
