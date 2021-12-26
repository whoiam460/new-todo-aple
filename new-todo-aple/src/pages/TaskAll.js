import { PageLayout, Title } from '../components'
import { Routes, Route } from 'react-router-dom'
const TaskAll = () => {
  return (
    <Routes>
      <Route exact path=":id" element={<PageLayout />} />
      <Route exact path="/" element= {<Title>no remainders</Title>}  />
    </Routes>
  )
}
export default TaskAll
