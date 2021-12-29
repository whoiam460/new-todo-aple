import TaskCombaineViewStyled from './TaskCombaineView.style'
import { Row, Col, Checkbox, Input, Button, Text } from '../../../components'
import { AiOutlineClose } from 'react-icons/ai'
import { BsFillFlagFill } from 'react-icons/bs'
import { useState } from 'react'
import { useStore } from '../../../context'

const TaskCombaineView = props => {
  const { children, taskId, task, flagTask } = props
  const { removeTaskRecord, updateTaskRecord } = useStore()
  const [editView, setEditView] = useState(false)
  const [newTaskTitle, setNewTaskTitle] = useState(children)
  const [flagStatus, setFlagStatus] = useState(task?.flag || flagTask)
  console.log(flagStatus)

  const changeFlagStatus = () => {
    setFlagStatus(!flagStatus)
    const values = { flagStatus: !flagStatus }
    updateTaskRecord(taskId, newTaskTitle, values)
  }

  const setEditMode = () => {
    setEditView(true)
  }

  const updateTask = e => {
    const values = { flagStatus: !flagStatus }
    if (e.key === 'Enter') {
      updateTaskRecord(taskId, newTaskTitle, values )
      setEditView(false)
    }
  }

  return (
    <TaskCombaineViewStyled>
      <Row className="mb-lg">
        <Col className=" pl-none">
          <Checkbox bgColor="lightBlue" />
        </Col>
        <Col
          className="d-flex pl-none pb-lg borderBottom-default"
          onDoubleClick={() => setEditMode()}
          size={12}>
          {editView ? (
            <Input
              value={newTaskTitle}
              onKeyDown={e => updateTask(e)}
              onChange={e => setNewTaskTitle(e.target.value)}
              autoFocus
              type="transparent"
            />
          ) : (
            <Text>{children}</Text>
          )}
          <Button
            flagStatus={flagStatus}
            onClick={() => changeFlagStatus()}
            className="ml-auto"
            icon={<BsFillFlagFill />}
          />
          <Button
            onClick={() => removeTaskRecord(taskId)}
            className="ml-md"
            icon={<AiOutlineClose />}
          />
        </Col>
      </Row>
    </TaskCombaineViewStyled>
  )
}

export default TaskCombaineView
