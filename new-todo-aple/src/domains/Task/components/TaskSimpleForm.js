import TaskViewSimpleFormStyled from './TaskSimpleForm.styled'
import { Row, Col, Checkbox, Input, Button } from '../../../components'
import { AiOutlineClose } from 'react-icons/ai'
import { BsFillFlagFill } from 'react-icons/bs'
import { useState } from 'react'
import { useStore } from '../../../context'
import { v4 as uuidv4 } from 'uuid'

const TaskSimpleForm = () => {
  const { addTaskRecord, selectedCategory, setShowAddTaskComponent } =
    useStore()
  const [taskListTitle, setTaskListTitle] = useState()

  const addTaskListTitle = e => {
    if (e.key === 'Enter') {
      addTaskRecord({
        taskId: uuidv4(),
        taskName: taskListTitle,
        flag: false,
        parentId: selectedCategory.categoryId
      })
      setShowAddTaskComponent(false)
    }
  }
  return (
    <TaskViewSimpleFormStyled>
      <Row>
        <Col className=" pl-none">
          <Checkbox bgColor="lightBlue" />
        </Col>
        <Col className="d-flex pl-none pb-lg borderBottom-default" size={12}>
          <Input
            onKeyDown={e => addTaskListTitle(e)}
            onChange={e => setTaskListTitle(e.target.value)}
            autoFocus
            type="transparent"
          />
          <Button className="ml-auto" icon={<BsFillFlagFill />} />
          <Button className="ml-md" icon={<AiOutlineClose />} />
        </Col>
      </Row>
    </TaskViewSimpleFormStyled>
  )
}
export default TaskSimpleForm
