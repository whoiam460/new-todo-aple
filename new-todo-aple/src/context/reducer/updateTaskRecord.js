const updateTaskRecord = (state, payload) => {
  const stateCopy = state
  const { id, newTaskTitle } = payload

 stateCopy.map(category => category.children.filter(item => {
     if (item.id === id) {
         item.name = newTaskTitle
     }
     return item
 }))
 return [...stateCopy]
}
export default updateTaskRecord
