import { Link } from 'react-router-dom'
import { TASK_FORM_ROUTE, TASK_LIST_ROUTE } from '../../utils/routesString'

import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="nav">
      <h2 className="nav__title">To-Do Manager</h2>
      <div className="nav__links">
        <Link className="nav__link" to={TASK_LIST_ROUTE}>
          Tasks List
        </Link>
        <Link className="nav__link" to={TASK_FORM_ROUTE}>
          Task Form
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
