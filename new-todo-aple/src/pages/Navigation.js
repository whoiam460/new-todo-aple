import { PageLayout, Title } from '../components'
import { Routes, Route } from 'react-router-dom'
import { TaskAll } from '.'
import { TasksFlagged } from './TasksFlagged'
import { TaskList } from '../domains/Task/components'
const Navigation = () => {
  return (
    <Routes>
      <Route exact path=":id" element={<PageLayout content= {<TaskList/>} />} />
      <Route exact path="/" />
      <Route exact path = "Flagged"  element ={<PageLayout content ={<TasksFlagged/>}/>} />
      {/* <Route exact path = "Flagged"  element ={<PageLayout content ={<TasksFlagged/>}/>} /> */}
    </Routes>
  )
}

export default Navigation
