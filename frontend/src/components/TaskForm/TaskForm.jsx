import Form from './Form'

import './TaskForm.css'

const TaskForm = () => {
  return (
    <section className="task-form__section">
      <header className="task-form__header">
        <h1 className="task-form__header-title">Add Task</h1>
      </header>
      <Form />
    </section>
  )
}

export default TaskForm
