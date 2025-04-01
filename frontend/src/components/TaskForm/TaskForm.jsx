import { useState } from 'react'
import './TaskForm.css'

const API_URL = 'http://localhost:5000/api/tasks'

const TaskForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [completed, setCompleted] = useState(false)
  const [priority, setPriority] = useState('low')
  const [tags, setTags] = useState([])
  const [tagInput, setTagInput] = useState('')
  // ToDo: Add error handling

  // Function to add a new task
  const addTask = async (taskData) => {
    const { title, description } = taskData

    if (!title || !description) {
      return false
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      })

      if (!response.ok) throw new Error('Network response was not ok')

      const data = await response.json()

      return data
    } catch (err) {
      console.error('❌ Error adding task:', err.message)
      return false
    }
  }

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await addTask({
      title,
      description,
      completed,
      priority,
      tags,
    })

    if (result) {
      setTitle('')
      setDescription('')
      setCompleted(false)
      setPriority('low')
      setTags([])
      setTagInput('')
      // ToDo: Add error handling
    } else if (result === false) {
      // ToDo: Add error handling for input error
    } else {
      // ToDo: Add error handling for API error
    }
  }
}

export default TaskForm
