import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'low' },
    tags: { type: [String], default: [] },
  },
  { timestamps: true },
)

const MODEL_NAME = 'Task'
const TASK_MODEL = mongoose.model(MODEL_NAME, taskSchema)

export default TASK_MODEL
