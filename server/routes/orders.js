const express = require("express")
const orderRouter = express.Router()
const { Order } = require("../models/index")



orderRouter.get("/", async (req, res, next) => {
	try {
		const orders = await Order.findAll()
		res.send(orders)
	} catch (error) {
		next(error)
	}
})

//GET one order
orderRouter.get("/:id", async (req, res) => {
    try{
        const oneOrder = await Order.findByPk(req.params.id)
        res.json(oneOrder);
    } catch (error) {
        console.error
        next(error)
    }
})

//Create order to inventory
orderRouter.post('/', async (req, res, next) => {
	try {
		const orders = await Order.create(req.body);
		res.send(orders);
	} catch (error) {
		next(error);
	}
});

//delete/an order from the inventory
orderRouter.delete("/:id", async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const findOrder = await Order.findByPk(orderId);
    await findOrder.destroy();
    const allOrders = await Order.findAll();
    res.json(allOrders);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = orderRouter;

