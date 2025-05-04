import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import path from 'path'
import { fileURLToPath } from 'url'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load env vars
dotenv.config({ path: path.join(__dirname, '.env') })

console.log('MongoDB URI:', process.env.MONGO_URI)
console.log('Current directory:', process.cwd())
console.log('Env file path:', path.join(__dirname, '.env'))

connectDB()

//this is a seeder file that when called, will import sample data from the data file to the database if a user issetting up the application locally

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser
      }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

//this will remove the sample data from the database if called
const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}