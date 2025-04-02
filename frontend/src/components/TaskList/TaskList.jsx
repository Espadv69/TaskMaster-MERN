import { useState, useEffect } from 'react'
import { API_URL } from '../../utils/routesString'
import './TaskList.css'

const TaskList = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch tasks from the API when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(API_URL)

        if (!response.ok) throw new Error('Failed to fetch tasks')

        const data = await response.json()
        setTasks(data)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching tasks:', err.message)
        setLoading(false)
      }
    }

    fetchTasks()
  }, [])

  return (
    <section className="task-list__section">
      <header className="task-list__header">
        <h1 className="task-list__header-title">Task List</h1>
      </header>

      <ul className="task-list__ul">
        {loading ? (
          <li>Loanding...</li>
        ) : tasks.length === 0 ? (
          <li>No tasks available</li>
        ) : (
          tasks.map((task) => (
            <li key={task._id} className="task-list__li">
              <h2 className="task-list__li-title">{task.title}</h2>
              <p className="task-list__li-description">{task.description}</p>
              <p className="task-list__li-status">{task.completed}</p>
            </li>
          ))
        )}
      </ul>
    </section>
  )
}

export default TaskList
