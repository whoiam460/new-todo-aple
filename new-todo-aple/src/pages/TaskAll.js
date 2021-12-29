import { Title } from '../components'
import { useStore } from '../context'

const TaskAll = () => {
  const { store } = useStore()
  return (
    <>
      {store.categories.map(item => {
        return (<Title>{item.categoryName}</Title>
          
          )
          store.tasks.map(elem => {
            return
          })
      })}
    </>
  )
}
export default TaskAll
