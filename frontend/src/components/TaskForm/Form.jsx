import { useState } from 'react'
import { addTask } from '../../services/taskService'

import InputForm from './InputForm'
import SectionForm from './SectionForm'

const Form = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('low')
  const [tags, setTags] = useState([])
  const [tagLength, setTagLength] = useState(0)
  const [maxLength] = useState(5)
  const [tagInput, setTagInput] = useState('')
  const [error, setError] = useState('')

  // Function to prevent form submission if the user presses Enter
  const preventEnterSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title.trim() || !description.trim()) {
      setError('Please fill in all fields')
      return
    }

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
      setTagLength(0)
      setError('')
    } else {
      setError('Failed to add task. Maybe the server is down.')
    }
  }

  // Function to handle tag input change
  const handleTagInputChange = (e) => {
    if (e.key === 'Backspace' && tagInput === '') {
      e.preventDefault()

      if (tagLength === 0 && tags.length === 0) {
        return
      }
      setTagLength(tagLength - 1)
      setTags(tags.slice(0, -1))
      return
    }

    if (tags.length >= 5) {
      return
    }

    if (e.key === 'Enter' && tagInput) {
      e.preventDefault()
      setTags([...tags, tagInput.trim()])
      setTagLength(tagLength + 1)
      setTagInput('')
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        onKeyDown={preventEnterSubmit}
        className="task-form__form"
      >
        <InputForm
          labelTitle="Title"
          inputValue={title}
          setInputValue={setTitle}
          setInputLength={30}
          placeholder="Enter task title"
        />

        <InputForm
          labelTitle="Description"
          inputValue={description}
          setInputValue={setDescription}
          setInputLength={255}
          placeholder="Enter task description"
        />

        <SectionForm
          labelName="Priority"
          sectionValue={priority}
          setSectionValue={setPriority}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </SectionForm>

        <label className="task-form__label">
          Tags
          <input
            type="text"
            className="task-form__input"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagInputChange}
            maxLength={12}
            placeholder="Enter to add a tag or Backspace to remove one"
          />
        </label>

        {error && <p className="task-form__error">{error}</p>}
        <button className="task-form__button">Add Task</button>
      </form>
      <footer className="task-form__footer">
        <h2 className="task-form__footer-title">Tags Added</h2>

        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag__span">
              {tag}
            </span>
          ))}
        </div>
      </footer>
      <span className="tags__length">
        {tagLength} / {maxLength} tags added
      </span>
    </>
  )
}

export default Form
