import { addRecord, removeRecord, updateRecord, addTaskRecord, removeTaskRecord, updateTaskRecord } from "."
const reducer = (state, action) => {
    const {type, payload} = action
    const stateCopy = state 

    const actionsMap = {
        addRecord,
        removeRecord,
        updateRecord,
        addTaskRecord,
        removeTaskRecord,
        updateTaskRecord
    }
    return actionsMap[type] (stateCopy, payload)
}

export default reducer