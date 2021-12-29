import { useStore } from '../../context'
import { TaskCombaineView } from '../../domains/Task/components'

const TasksFlagged = () => {
  const { store } = useStore()

  return (
    <>
      {store.tasks?.map(elem =>
        elem.flag == true ? (
          <TaskCombaineView flagTask={elem.flag}>{elem.taskName}</TaskCombaineView>
        ) : (
          false
        )
      )}
    </>
  )
}

export default TasksFlagged
