const updateRecord = (state, payload) => {
  const { categoryId, newTitle } = payload
  const stateCopy = state


  stateCopy.categories.filter(item => {
    if (item.categoryId === categoryId) {
      item.categoryName = newTitle
    }
    
    return item
  })

  return { ...stateCopy }
}
export default updateRecord
