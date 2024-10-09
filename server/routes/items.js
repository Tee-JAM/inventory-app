const express = require("express")
const itemRouter = express.Router()
const { Item } = require("../models")
const { validationResult } = require("express-validator")

const { itemCheckNotEmptyTrim, checkForURL, checkForFloat } = require("../middleware")

// GET /items
itemRouter.get("/", async (req, res, next) => {
	try {
		const items = await Item.findAll()
		res.send(items)
	} catch (error) {
		next(error)
	}
})

//GET one item
itemRouter.get("/:id", async (req, res) => {
	try {
		const oneItem = await Item.findByPk(req.params.id)
		res.json(oneItem)
	} catch (error) {
		console.error
		next(error)
	}
})

itemRouter.get("/search/:name", async (req, res) => {
    try {
        const theName = await Item.findAll({where: {name: req.params.name}});
        res.json(theName);

    } catch (error) {
		console.error
		next(error)
	}
})


//Create item to inventory
itemRouter.post("/", [itemCheckNotEmptyTrim, checkForURL, checkForFloat], async (req, res, next) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		res.json({ error: errors.array() })
	} else {
		try {
			const items = await Item.create(req.body)
			res.send(items)
		} catch (error) {
			next(error)
		}
	}
})

itemRouter.put("/:id", [itemCheckNotEmptyTrim, checkForURL, checkForFloat], async (req, res, next) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		res.json({ error: errors.array() })
	} else {
		try {
			const itemId = req.params.id
			const findItem = await Item.findByPk(itemId)
			if (!findItem) return res.sendStatus(404)
			const foundItem = await findItem.update({ ...findItem, ...req.body })
			res.json(foundItem)
		} catch (err) {
			console.log(err)
			next(err)
		}
	}
})

//delete/an Item from the inventory
itemRouter.delete("/:id", async (req, res, next) => {
	try {
		const itemId = req.params.id
		const findItem = await Item.findByPk(itemId)
		await findItem.destroy()
		const allItems = await Item.findAll()
		res.json(allItems)
	} catch (error) {
		console.error(error)
		next(error)
	}
})

module.exports = itemRouter
