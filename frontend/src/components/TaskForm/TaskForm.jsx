import { useState } from 'react'
import { addTask } from '../../services/taskService'

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
      <input
        type="text"
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        onKeyDown={handleTagInputChange}
        maxLength={12}
      />
      <div
        className="tags"
        style={{
          display: tags.length ? 'grid' : 'none',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          padding: '10px',
        }}
      >
        {tags.map((tag, index) => (
          <span
            key={index}
            className="tag"
            style={{
              textAlign: 'center',
              padding: '5px',
              backgroundColor: '#e0e0e0',
              borderRadius: '5px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  )
}

export default TaskForm
