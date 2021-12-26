import { Row, Col, Header } from '../../'
import { TaskList } from '../../../domains/Task/components'
import PageLayoutStyled from './PageLayout.style'
import { useStore } from '../../../context'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const PageLayout = () => {
  const { id } = useParams()
  const { selectedCategory, setSelectedCategory, store } = useStore()

  useEffect(() => {
    const result = store.find(item => item.id === id)
    setSelectedCategory(result)
  }, [id, store])

  return (
    <PageLayoutStyled>
      <Row>
        <Col className="p-none" size={12}>
          <Header itemSelectedName={selectedCategory?.name} />
        </Col>
      </Row>
      <Row>
        <Col className="p-none" size={12}>
          <TaskList />
        </Col>
      </Row>
    </PageLayoutStyled>
  )
}

export default PageLayout
