const { check } = require("express-validator")

//item validators
const itemCheckNotEmptyTrim = check(["name", "description", "price", "category", "image"]).not().isEmpty().trim()
const checkForURL = check("image").isURL()
// const checkForInt = check("price").isInt()
const checkForFloat = check("price").isFloat({ min: 0.01 });


module.exports = {
	itemCheckNotEmptyTrim,
	checkForURL,
	// checkForInt,
	checkForFloat
}
