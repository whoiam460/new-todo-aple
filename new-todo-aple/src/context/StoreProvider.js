import { useReducer } from 'react'
import StoreContex from './StoreContext'
import { reducer } from './reducer'
import { useCategoryActions, useTaskActions, useTakeData } from './hooks'
import { useState, useEffect } from 'react'
import firestoreService from '../service/firebase/firestoreService'

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, { categories: [], tasks: [] })
  const [showAddTaskComponent, setShowAddTaskComponent] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState()
  const { addRecord, removeRecord, updateRecord } = useCategoryActions(dispatch)
  const { addTaskRecord, removeTaskRecord, updateTaskRecord } = useTaskActions(dispatch)
  const takeData = useTakeData(dispatch)
  console.log(store.tasks);


  useEffect(() => {
    const updateData = async () => {
      const BDCategories = await firestoreService.queryDocuments('categories')
      const BDTasks = await firestoreService.queryDocuments('tasks')
      takeData({ categories: BDCategories, tasks: BDTasks })
    }
    updateData()
  }, [])

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
