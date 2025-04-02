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

      <ul className="task-list">
        {loading ? (
          <li className="task-list__loading-message">Cargando tareas...</li>
        ) : tasks.length === 0 ? (
          <li className="task-list__empty-message">
            No hay tareas disponibles
          </li>
        ) : (
          tasks.map((task) => (
            <li key={task._id} className="task-list__item">
              <div className="task-list__content">
                <h2 className="task-list__title">{task.title}</h2>
                {task.description && (
                  <p className="task-list__description">{task.description}</p>
                )}
                <div className="task-list__meta">
                  <span
                    className={`task-list__status ${
                      task.completed ? 'completed' : 'pending'
                    }`}
                  >
                    {task.completed ? 'Completada' : 'Pendiente'}
                  </span>
                  <span
                    className={`task-list__priority priority-${task.priority}`}
                  >
                    Prioridad: {task.priority}
                  </span>
                </div>
                {task.tags?.length > 0 && (
                  <div className="task-list__tags">
                    {task.tags.map((tag, index) => (
                      <span key={index} className="task-list__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  )
}

export default TaskList
