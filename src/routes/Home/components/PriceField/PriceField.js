import React from 'react'
import classes from './PriceField.scss'

const propTypes = {
	price: React.PropTypes.string.isRequired
}

let PriceField = (props) => (
	<div className='PriceField'>
		<div className='headlineWrapper'><h3>Preis pro Einstickung</h3></div>
		<div className='text'>Vorraussichtliche Kosten pro Einstickung:
			<span className='price'>{ props.price } €</span>
		</div>
	</div>
)

PriceField.propTypes = propTypes

export default PriceField
