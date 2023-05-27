const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
const controller = require('./controller')

const app = express()
app.use(cors())
app.use(express.json())

const URL =
  'mongodb+srv://warris:WarrisPassword@boardcluster.0sttbjl.mongodb.net/?retryWrites=true&w=majority'

async function connectMongoose() {
  try {
    await mongoose.connect(URL)
    console.log('Connect to mongoDB!')
  } catch (e) {
    console.log('Connection to MongoDB error:', e.message)
  }
}
connectMongoose()

app.get('/', (req, res) => {
  res.send('hello bababoi!')
})

app.get('/lists', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  try {
    const lists = await controller.findShop()
    res.status(201).json(lists)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

app.post('/order', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  try {
    const order = await controller.addOrder(req.body)
    res.status(201).json(order)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

app.get('/orders', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  try {
    const lists = await controller.findOrder()
    res.status(201).json(lists)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})
app.get('/coupon', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  try {
    const lists = await controller.findCoupon()
    res.status(201).json(lists)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

app.listen(5000, () => {
  console.log('Server running on port 5000')
})
