import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

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
const HOME_ROUTE = '/'

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
}
