const mongoose = require('mongoose')

const SHOP = 'Shop'
const ORDER = 'Order'
const COUPON = 'Coupon'

const itemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})
const itemInOrderSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
})

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  items: {
    type: [itemSchema],
    default: [],
  },
})

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  itemsId: {
    type: [itemInOrderSchema],
    default: [],
  },
})

const couponSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  percents: {
    type: Number,
    required: true,
  },
})

module.exports = {
  Shop: mongoose.model(SHOP, shopSchema),
  Order: mongoose.model(ORDER, orderSchema),
  Coupon: mongoose.model(COUPON, couponSchema),
}
