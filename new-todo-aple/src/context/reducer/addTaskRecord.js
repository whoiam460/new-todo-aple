const addTaskRecord = (state, payload) => {

 return { ...state, tasks: [...state.tasks, payload] }
}

export default addTaskRecord
