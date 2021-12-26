import { SwitcherWrapper } from './Switcher.style'
import { IconModule, Col, Row, Text } from '../'

const Switcher = props => {
  const { children, icon, iconBg, ...rest } = props

  return (
    <SwitcherWrapper {...rest}>
      <Row className="mb-lg align-items-center">
        <Col>
          <IconModule iconBg={iconBg} icon={icon} />
        </Col>
        <Col className="ml-auto">
          <Text>5</Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Text>{children}</Text>
        </Col>
      </Row>
    </SwitcherWrapper>
  )
}

export default Switcher
