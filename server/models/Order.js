const { Model, DataTypes } = require("sequelize")
const { sequelize } = require("../db")

class Order extends Model {}

Order.init(
	{
		orderDate: DataTypes.DATE,
		orderStatus: DataTypes.STRING,
		totalAmount: DataTypes.INTEGER,
		address: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: "Order",
	}
)

module.exports = { Order }
