import { useState } from "react"
import apiURL from "../api"

export const UpdateForm = ({ item, itemRefresh, setItemRefresh, editView, setEditView, goBack }) => {
	const [itemUpdate, setItemUpdate] = useState({
		name: item.name,
		description: item.description,
		price: item.price,
		category: item.category,
		image: item.image,
	})

	async function handleEdit(e) {
		e.preventDefault()
		const itemKey = item.id
		const res = await fetch(`${apiURL}/items/${itemKey}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(itemUpdate),
		})
		const data = await res.json()
		setItemRefresh(!itemRefresh)
		goBack()
	}

	function backToSingleView() {
		setEditView(!editView)
	}

	return (
		<>
			<h3>Edit {item.name}</h3>
			<br />
			<form onSubmit={handleEdit}>
				<br />
				<label htmlFor="item-name">Name: </label>
				<input type="text" value={itemUpdate.name} onChange={(e) => setItemUpdate({ ...itemUpdate, name: e.target.value })} />
				<br />
				<label htmlFor="item-description">Description:</label>
				<input type="text" value={itemUpdate.description} onChange={(e) => setItemUpdate({ ...itemUpdate, description: e.target.value })} />
				<br />
				<label htmlFor="item-price">Price:</label>
				<input type="number" value={itemUpdate.price} onChange={(e) => setItemUpdate({ ...itemUpdate, price: e.target.value })} />
				<br />
				<label htmlFor="item-category">Category:</label>
				<input type="text" value={itemUpdate.category} onChange={(e) => setItemUpdate({ ...itemUpdate, category: e.target.value })} />
				<br />
				<label htmlFor="item-image">Image:</label>
				<input type="text" value={itemUpdate.image} onChange={(e) => setItemUpdate({ ...itemUpdate, image: e.target.value })} />
				<br />
				<button type="submit">Submit</button>
				{"   "}
				<button onClick={backToSingleView}>Back</button>
			</form>
		</>
	)
}
