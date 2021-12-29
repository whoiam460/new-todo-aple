import { Row, Switcher, Col, Input, Title } from '../'
import {
  AiOutlineUnorderedList,
  AiOutlineSearch,
  AiFillFlag,
  AiOutlineCalendar,
  AiFillContainer,
} from 'react-icons/ai'
import CategoryList from '../../domains/Category/components/CategoryList'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../context'
import { useEffect } from 'react'

const SideBar = () => {
  const Navigate = useNavigate()
  const { store, setSelectedCategory } = useStore()

  useEffect(() => {
    Navigate('/')
  }, [])


  let FlaggedCount = 0
  console.log(FlaggedCount);
  store?.tasks?.map(item => (item.flag === true ? FlaggedCount++ : null))

  return (
    <div>
      <div>
        <Row className="mt-xxxl mb-xl">
          <Col className="p-none" size={12}>
            <Input
              type={'search'}
              icon={<AiOutlineSearch />}
              placeholder={'Search'}
            />
          </Col>
        </Row>

        <Row className="mb-xl">
          <Col className="p-none mr-lg" size={6}>
            <Switcher
              onClick={() => {
                Navigate('Today')
                setSelectedCategory({ name: 'Today' })
              }}
              value ={0}
              iconBg="#037aff"
              icon={<AiOutlineUnorderedList />}>
              Today
            </Switcher>
          </Col>
          <Col className="p-none ml-lg" size={6}>
            <Switcher
              onClick={() => {
                Navigate('Scheduled')
                setSelectedCategory({ name: 'Scheduled' })
              }}
              value={0}
              iconBg="#ff3b30"
              icon={<AiOutlineCalendar />}>
              Scheduled
            </Switcher>
          </Col>
        </Row>

        <Row className="mb-xxl">
          <Col className="p-none mr-lg" size={6}>
            <Switcher
              onClick={() => {
                Navigate('All')
                setSelectedCategory({ name: 'All' })
              }}
              iconBg="#5b626a"
              value={store.tasks.length}
              icon={<AiFillContainer />}>
              All
            </Switcher>
          </Col>
          <Col className="p-none ml-lg" size={6}>
            <Switcher
            value ={ FlaggedCount}
              onClick={() => {
                Navigate('Flagged')
                setSelectedCategory({ name: 'Flagged' })
              }}
              iconBg="#ff9402ed"
              icon={<AiFillFlag />}>
              Flagged
            </Switcher>
          </Col>
        </Row>

        <Row>
          <Col className="p-none" size={12}>
            <Title variant="h3">My Lists</Title>
          </Col>
        </Row>
      </div>

      <CategoryList />
    </div>
  )
}

export default SideBar
