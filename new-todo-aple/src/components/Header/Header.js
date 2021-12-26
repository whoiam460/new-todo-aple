import { Button, Row, Col, Title } from '../'
import { AiOutlinePlus } from 'react-icons/ai'
import HeaderStyled from './Header.style'
import { useStore } from '../../context'

const Header = (props) => {
  const {itemSelectedName} = props
  const { setShowAddTaskComponent } = useStore()

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
        <Col className="p-none" size={6}>
          <Title>{itemSelectedName}</Title>
        </Col>
        <Col size={6}>
          <Title className="ml-auto">0</Title>
        </Col>
      </Row>
    </HeaderStyled>
  )
}

export default Header
