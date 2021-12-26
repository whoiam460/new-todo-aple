import { Col, Row } from '../../../components'
import { useStore } from '../../../context'
import { TaskSimpleForm, TaskCombaineView } from '.'
const TaskList = () => {
  const { showAddTaskComponent, selectedCategory } = useStore()
  return (
    <Row>
      <Col className="p-none" size={12}>
        {selectedCategory?.children.map(item => {
          return (
            <TaskCombaineView itemId={item.id}>{item.name}</TaskCombaineView>
          )
        })}
        {/* <TaskCombaineView>dssss</TaskCombaineView> */}
        {showAddTaskComponent ? <TaskSimpleForm /> : null}
      </Col>
    </Row>
  )
}
export default TaskList
