import React from "react"
import { Item } from "./Item"

export const ItemList = ({ items, onItemClick }) => {
	return (
		<>
			{items.map((item, idx) => {
				return <Item item={item} key={idx} onItemClick={() => onItemClick(item.id)} />
			})}
		</>
	)
}
