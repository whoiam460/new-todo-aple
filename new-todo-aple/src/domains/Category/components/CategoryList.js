import CategorySimpleForm from './CategorySimpleForm'
import CategoryCombaineView from './CategoryCombaineView'
import { Col, Row, Button } from '../../../components'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useState } from 'react'
import { useStore } from '../../../context'

const CategoryList = () => {
  const [showComponent, setShowComponent] = useState(false)
  const { store } = useStore()

  return (
    <Row
      style={{
        minHeight: '660px',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <Col style={{ padding: '15px 0 0 0' }}>
        {store.categories?.map(item => {
          return (
            <CategoryCombaineView key={item.id} categoryId={item.categoryId}>
              {item.categoryName}
            </CategoryCombaineView>
          )
        })}
        {showComponent ? (
          <CategorySimpleForm setShowComponent={setShowComponent} />
        ) : null}
      </Col>
      <Col className="p-none">
        <Button
          onClick={() => setShowComponent(true)}
          icon={<AiOutlinePlusCircle />}>
          Add List
        </Button>
      </Col>
    </Row>
  )
}

export default CategoryList
