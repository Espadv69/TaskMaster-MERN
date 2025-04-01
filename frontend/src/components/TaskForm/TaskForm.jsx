import { useState } from 'react'
import { addTask } from '../../services/taskService.js'

import './TaskForm.css'

const TaskForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [completed, setCompleted] = useState(false)
  const [priority, setPriority] = useState('low')
  const [tags, setTags] = useState([])
  const [tagInput, setTagInput] = useState('')
  // ToDo: Add error handling

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

  // Function to handle tag input change
  const handleTagInputChange = (e) => {
    if (e.key === 'Enter' && tagInput) {
      e.preventDefault()
      setTags([...tags, tagInput])
      setTagInput('')
    }
  }

  return (
    <section className="task-form__section">
      <h1>Add Task</h1>
    </section>
  )
}

export default TaskForm
