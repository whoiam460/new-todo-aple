import { Row, Col, Header } from '../../'
import { Content } from '../../index'
import PageLayoutStyled from './PageLayout.style'

const PageLayout = ({content}) => {

  return (
    <PageLayoutStyled>
      <Row>
        <Col className="p-none" size={12}>
          <Header  />
        </Col>
      </Row>
      <Row>
        <Col className="p-none" size={12}>
          {content}
        </Col>
      </Row>
    </PageLayoutStyled>
  )
}

export default PageLayout
