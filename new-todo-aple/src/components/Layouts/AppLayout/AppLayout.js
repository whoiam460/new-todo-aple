import AppLayoutStyled from './AppLayout.style'
import { Col, Row, Container, Header } from '../..'


const AppLayout = props => {
  const { sideBar, content } = props

  return (
    <AppLayoutStyled>
      <Container variant="fluid">
        <Row>
          <Col className="bgColor-gray-default mH-100vh  " size={2}>
            {sideBar}
          </Col>
          <Col size={10}>
            {content}
          </Col>
        </Row>
      </Container>
    </AppLayoutStyled>
  )
}

export default AppLayout
