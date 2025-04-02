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
}

export default TaskList
