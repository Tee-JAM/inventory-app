const { Sequelize } = require("sequelize")
const { sequelize } = require("../db")
const { Item } = require("./Item")
const { User } = require("./User")
const { Order } = require("./Order")

module.exports = {
	db: sequelize,
	Item,
	User,
	Order,
}
