import { HOME_ROUTE, API_ROUTE } from './utils/consts.js'
import router from './routes/taskRoutes.js'

import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use(API_ROUTE, router)

// MongoDB connection 🐢
const MONGO_URI = process.env.MONGO_URI

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('MongoDB connected ✅')
  } catch (err) {
    console.error('MongoDB connection error ❌', err)
    process.exit(1)
  }
}

// Get main route 💚
app.get(HOME_ROUTE, async (req, res) => {
  res.send('Welcome to the backend server! 💚')
})

// Start server 🚀
const startServer = async () => {
  // Connect to MongoDB
  await connectDB()

  // Port configuration
  const PORT = process.env.PORT || 5000

  // Server listening
  const server = app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT} 🚀`),
  )

  // Clean up on exit 🧼
  const cleanUp = async () => {
    console.log('Cleaning up... 🧼')

    // Try to close the server 📂
    try {
      await mongoose.connection.close()
      console.log('MongoDB connection closed 🗑️')
    } catch (err) {
      console.error('Error closing MongoDB connection ❌', err)
    }

    // Close the server 📁
    server.close(() => {
      console.log('Server closed ✅')
      process.exit(0)
    })
  }

  // Handle process termination signals
  process.on('SIGINT', cleanUp) // Ctrl + C
  process.on('SIGTERM', cleanUp) // Heroku or other cloud providers
}

// Call the startServer function to start the server 🚀
startServer()
