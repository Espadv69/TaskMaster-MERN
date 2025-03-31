import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express()

app.use(cors())
app.use(express.json())

// MongoDB connection 🐢
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connected ✅')
  } catch (err) {
    console.error('MongoDB connection error ❌', err)
    process.exit(1)
  }
}

const HOME_ROUTE = '/'
