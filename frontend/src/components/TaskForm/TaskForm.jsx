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
  const [error, setError] = useState('')

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
      setError('')
    } else if (result === false) {
      setError('Please fill in all fields')
      // ToDo: Add handling success message
    } else {
      setError('Something went wrong', result)
      // ToDo: Add handling success message
    }
  }

  // Function to handle tag input change
  const handleTagInputChange = (e) => {
    if (e.key === 'Enter' && tagInput) {
      e.preventDefault()
      setTags([...tags, tagInput.trim()])
      setTagInput('')
    }
  }

  return (
    <section className="task-form__section">
      <header className="task-form__header">
        <h1 className="task-form__header-title">Add Task</h1>
      </header>

      <form onSubmit={handleSubmit} className="task-form__form"></form>
    </section>
  )
}

export default TaskForm
