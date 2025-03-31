import TASK_MODEL from '../models/Task.js'

// Get all tasks 😄
export const getTasks = async (req, res) => {
  try {
    // Fetch all tasks from the database
    const tasks = await TASK_MODEL.find()

    // Send the tasks as a response
    res.status(200).json(tasks)
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tasks', error: err })
  }
}

// Get a single task by ID 😄
export const getTaskById = async (req, res) => {
  try {
    const task = await TASK_MODEL.findById(req.params.id)

    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }

    res.status(200).json(task)
  } catch (err) {}
}
