import './styles/config.css'
import './styles/helpers.css'
import { StoreProvider } from './context'
import { AppLayout, SideBar,} from './components'
import {TaskAll} from './pages'
import { BrowserRouter as Router} from 'react-router-dom'
import Navigation from './pages/Navigation'


function App() {
  return (
    <StoreProvider>
      <Router>
        <AppLayout sideBar={<SideBar/>} content={<Navigation/>}  />
        {/* <Navigation/> */}
      </Router>
      
    </StoreProvider>
  )
}

export default App
