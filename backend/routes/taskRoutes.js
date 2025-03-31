import express from 'express'
import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js'

const API_TASKS = '/tasks'
const API_TASKS_ID = '/tasks/:id'

const router = express.Router()

// Routes for tasks
router.get(API_TASKS, getTasks)

// Route to get a single task by ID
router.get(API_TASKS_ID, getTaskById)

// Route to create a new task
router.post(API_TASKS, createTask)

// Route to update a task by ID
router.put(API_TASKS_ID, updateTask)

// Route to delete a task by ID
router.delete(API_TASKS_ID, deleteTask)

export default router
