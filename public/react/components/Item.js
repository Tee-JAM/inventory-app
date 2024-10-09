import React from "react"

// add single view to Item (Tiff)

export const Item = ({ item, onItemClick }) => {
	const currency = item.price.toFixed(2)

	return (
		<div className="item-card" onClick={onItemClick}>
			<>
				<img className="image-size" src={item.image} alt={item.name} />
				<h3 className="item-name">{item.name}</h3>
				<p className="item-price">${currency}</p>
			</>
		</div>
	)
}
