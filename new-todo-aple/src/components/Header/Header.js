import { Button, Row, Col, Title, Text } from '../'
import { AiOutlinePlus } from 'react-icons/ai'
import HeaderStyled from './Header.style'
import { useStore } from '../../context'
import { useParams } from 'react-router-dom'

const Header = props => {
  const { id } = useParams()

  const { setShowAddTaskComponent, selectedCategory, store } = useStore()

  let taskCounter = 0
  store?.tasks?.map(item => (item.parentId === id ? taskCounter++ : null))

  return (
    <HeaderStyled>
      <Row className="mb-xl">
        <Col size={12}>
          <Button
            onClick={() => setShowAddTaskComponent(true)}
            className="ml-auto"
            variant="md"
            icon={<AiOutlinePlus />}
          />
        </Col>
      </Row>

      <Row>
        <Col className="pl-none d-flex align-items-center mb-xxl" size={12}>
          <Title>{selectedCategory?.name}</Title>
          <Title className="ml-auto">{taskCounter}</Title>
        </Col>
      </Row>

      <Row>
        <Col
          className="  pl-none d-flex align-items-center borderBottom-default "
          size={12}>
          <Text>0 Completed</Text>
          <Text className="ml-auto">Show</Text>
        </Col>
      </Row>
    </HeaderStyled>
  )
}

export default Header
