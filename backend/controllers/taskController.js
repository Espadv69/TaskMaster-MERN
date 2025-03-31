import TASK_MODEL from '../models/Task.js'

const PRIORITIES = ['low', 'medium', 'high']

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
    // Fetch a single task by ID from the database
    const task = await TASK_MODEL.findById(req.params.id)

    // Check if the task exists
    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }

    // If the task exists, send it as a response
    res.status(200).json(task)
  } catch (err) {
    res.status(500).json({ message: 'Error fetching task', error: err })
  }
}

// Create a new task 😄
export const createTask = async (req, res) => {
  try {
    // Destructure the task data from the request body
    const { title, description, completed, priority, tags } = req.body

    // Manual validation
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: 'Title and description are required' })
    }

    // Priority validation
    if (priority && !PRIORITIES.includes(priority)) {
      return res.status(400).json({
        message: 'Invalid priority value. Allowed: low, medium, high.',
      })
    }

    // Make sure tags is an array
    if (tags && !Array.isArray(tags)) {
      return res
        .status(400)
        .json({ message: 'Tags must be an array of strings.' })
    }

    // Create a new task with validated data
    const newTask = new TASK_MODEL({
      title,
      description,
      completed: completed || false,
      priority: priority || 'low',
      tags: tags || [],
      updatedAt: Date.now(),
    })

    // Save the new task to the database
    const savedTask = await newTask.save()

    // Send the saved task as a response
    res.status(201).json(savedTask)
  } catch (err) {
    // Specific error to failed validation
    if (err.name === 'ValidationError') {
      return res
        .status(400)
        .json({ message: 'Validation error', error: err.message })
    }

    // General error handling
    res.status(500).json({ message: 'Error creating task', error: err })
  }
}

// Update a task by ID 😄
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const { title, description, completed, priority, tags } = req.body

    // Validate if the task ID exists
    const task = await TASK_MODEL.findById(id)
    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }

    // Manual validation before updating
    if (priority && !PRIORITIES.includes(priority)) {
      return res.status(400).json({
        message: 'Invalid priority value. Allowed: low, medium, high.',
      })
    }

    if (tags && !Array.isArray(tags)) {
      return res
        .status(400)
        .json({ message: 'Tags must be an array of strings.' })
    }
  } catch (err) {}
}
