import { useState } from 'react'
import { addTask } from '../../services/taskService.js'

import './TaskForm.css'

const TaskForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
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
      priority,
      tags,
    })

    if (result) {
      setTitle('')
      setDescription('')
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

      <form onSubmit={handleSubmit} className="task-form__form">
        <label>
          Title
          <input type="text" />
        </label>

        <label>
          Title
          <input type="text" />
        </label>

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <label>
          Tags
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagInputChange}
            maxLength={12}
          />
        </label>
      </form>
    </section>
  )
}

export default TaskForm
