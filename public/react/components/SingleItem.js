import React, { useState } from "react"
import { UpdateForm } from "./UpdateForm"

export const SingleItem = ({ item, deleteItem, goBack, itemRefresh, setItemRefresh }) => {
	const currency = item.price.toFixed(2)

	const [editView, setEditView] = useState(false)

	function editItem() {
		setEditView(!editView)
	}

	return (
		<>
			{editView ? (
				<UpdateForm item={item} itemRefresh={itemRefresh} setItemRefresh={setItemRefresh} editView={editView} setEditView={setEditView} goBack={goBack} />
			) : (
				<div className="container">
					<div className="item-details">
						<img className="image-size" src={item.image} alt={item.name}></img>
						<h1>{item.name}</h1>
						<h2>${currency}</h2>
						<p>{item.category}</p>
						<p>{item.description}</p>
					</div>

					<div className="allButtons">
						<button className="backBtn" onClick={goBack}>
							Back
						</button>
						<button className="editBtn" onClick={editItem}>
							Edit
						</button>
						<button className="deleteBtn" onClick={() => deleteItem(item.id)}>
							Delete
						</button>
					</div>
				</div>
			)}
		</>
	)
}
