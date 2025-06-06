import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TASK_LIST_ROUTE, TASK_FORM_ROUTE } from './utils/routesString.js'

import NavBar from './components/NavBar/NavBar.jsx'
import TaskFormPage from './pages/TaskFormPage'
import TaskListPage from './pages/TaskListPage'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path={TASK_LIST_ROUTE} element={<TaskListPage />} />
        <Route path={TASK_FORM_ROUTE} element={<TaskFormPage />} />
      </Routes>
    </Router>
  )
}

export default App
