const addRecord = (state, payload) => {
  
  return { ...state, categories: [...state.categories, payload] }
}

export default addRecord
