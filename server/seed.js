const { items } = require("./seedData.js");
const { users } = require("./seedData.js");
const { orders } = require("./seedData.js");

const { sequelize } = require("./db");
const { Item } = require("./models");
const { User } = require("./models/index.js");
const { Order } = require("./models/index.js");

const seed = async () => {
  try {
    // drop and recreate tables per model definitions
    await sequelize.sync({ force: true });

    // insert data
    await Promise.all(items.map((item) => Item.create(item)));
    // await Promise.all(orders.map((order) => Order.create(order)));
    // await Promise.all(users.map((user) => User.create(user)));

    console.log("db populated!");
  } catch (error) {
    console.error(error);
  }
};

seed();
