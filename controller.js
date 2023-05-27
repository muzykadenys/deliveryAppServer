const { Shop, Order, Coupon } = require('./schema')

async function findShop(prop) {
  const list = await Shop.find(prop)
  return list
}

async function addOrder(prop) {
  const order = await new Order({ ...prop })
  await order.save()
  console.log(`${prop.name}'s order added`)
}

async function findOrder(prop) {
  const list = await Order.find(prop)
  return list
}

async function findCoupon(prop) {
  const list = await Coupon.find(prop)
  return list
}

module.exports = {
  findShop: findShop,
  addOrder: addOrder,
  findOrder: findOrder,
  findCoupon: findCoupon,
}
