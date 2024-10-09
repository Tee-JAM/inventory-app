import React, { useState } from "react"
import apiURL from "../api"

export const ItemForm = ({ addView, setAddView, itemRefresh, setItemRefresh }) => {
	const [itemName, setItemName] = useState("")
	const [description, setDescription] = useState("")
	const [price, setPrice] = useState(0)
	const [category, setCategory] = useState("")
	const [itemimage, setItemImage] = useState("")

	const item = {
		name: itemName,
		description: description,
		price: price,
		category: category,
		image: itemimage,
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		const response = await fetch(`${apiURL}/items`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(item),
		})

		const data = await response.json()

		setItemName("")
		setDescription("")
		setPrice(0)
		setCategory("")
		setItemImage("")
		setItemRefresh(!itemRefresh)
		setAddView(!addView)
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2 className="addNewItem">Add New Item</h2>

			<label htmlFor="item-name">Item Name:</label>
			<input type="text" id="item-name" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
			<br />

			<label htmlFor="description">Description:</label>
			<input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required></input>
			<br />

			<label htmlFor="price">Price:</label>
			<input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
			<br />

			<label htmlFor="category">Category:</label>
			<input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required />
			<br />

			<label htmlFor="image">Image:</label>
			<input type="url" id="image" value={itemimage} onChange={(e) => setItemImage(e.target.value)} required />
			<br />

			<button type="submit">Add Item</button>
		</form>
	)
}
