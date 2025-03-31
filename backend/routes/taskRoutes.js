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
