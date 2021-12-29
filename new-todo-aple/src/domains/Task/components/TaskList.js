import { Col, Row } from '../../../components'
import { useStore } from '../../../context'
import { TaskSimpleForm, TaskCombaineView } from '.'
const TaskList = () => {
  const { showAddTaskComponent, store, selectedCategory } = useStore()

  return (
    <Row>
      <Col className="p-none" size={12}>
        {store.tasks.map(item =>
          selectedCategory?.categoryId === item.parentId ? (
            <TaskCombaineView task={item} taskId={item.taskId}>
              {item.taskName}
            </TaskCombaineView>
          ) : null
        )}

        {showAddTaskComponent ? <TaskSimpleForm /> : null}
      </Col>
    </Row>
  )
}
export default TaskList
