import { useReducer } from 'react'
import StoreContex from './StoreContext'
import { reducer } from './reducer'
import { useCategoryActions, useTaskActions } from './hooks'
import { useState } from 'react'

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, [])
  const [showAddTaskComponent, setShowAddTaskComponent] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState()
  const { addRecord, removeRecord, updateRecord } = useCategoryActions(dispatch)
  const { addTaskRecord, removeTaskRecord, updateTaskRecord } =
    useTaskActions(dispatch)
  console.log(store)
  // console.log(selectedCategory)

  return (
    <StoreContex.Provider
      value={{
        store,
        addRecord,
        removeRecord,
        updateRecord,
        selectedCategory,
        setSelectedCategory,
        showAddTaskComponent,
        setShowAddTaskComponent,
        addTaskRecord,
        removeTaskRecord,
        updateTaskRecord,
      }}>
      {children}
    </StoreContex.Provider>
  )
}

export default StoreProvider
