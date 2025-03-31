import { Link } from 'react-router-dom'
import { TASK_FORM_ROUTE, TASK_LIST_ROUTE } from '../../utils/routesString'

const NavBar = () => {
  return (
    <nav className="nav">
      <h2>To-Do manager</h2>
      <div className="nav__links">
        <Link to={TASK_LIST_ROUTE}>Tasks List</Link>
        <Link to={TASK_FORM_ROUTE}>Task Form</Link>
      </div>
    </nav>
  )
}

export default NavBar
