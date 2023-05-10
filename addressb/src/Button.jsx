import React, { useState } from "react"

const Button = ({ name, onClick, image }) => {
	return (
		<>
			<img src={image} alt={name} />
			<h3>{name}</h3>
			<button
				onClick={onClick}
				>
				Show Details 
			</button>
			<br />
		</>
	)
}

export default Button
