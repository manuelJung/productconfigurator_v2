import React from 'react'
import classes from './SelectColorInput.scss'

import SelectInput from 'components/SelectInput'

const propTypes = {
	value: 			React.PropTypes.string.isRequired,
	onChange: 		React.PropTypes.func.isRequired,
	label: 			React.PropTypes.string.isRequired,
	isRequired: 	React.PropTypes.bool,
	items: 			React.PropTypes.arrayOf(React.PropTypes.shape({
		value:			React.PropTypes.string.isRequired,
		label:			React.PropTypes.string.isRequired
	})).isRequired
}

class SelectColorInput extends React.Component {
	
	constructor(props){
		super(props)

		this.cp = this._getCProps()
		this.cs = this._getCStyles()

		this.getLabels = this.getLabels.bind(this)
		this.getColorBoxes = this.getColorBoxes.bind(this)
	}

	getLabels(){
		return this.props.items.map( item => item.label )
	}

	getColorBoxes(){
		return this.props.items.map(item => this.renderColorBox(item.value))
	}

	_getCStyles(){
		return {
			colorBox: (color) => ({
				background: color
			})
		}
	}

	_getCProps(){
		return{
			SelectColorInput: () => ({
				className: 'SelectColorInput'
			}),
			selectInput: () => ({
				value: 			this.props.value,
				onChange: 		this.props.onChange,
				label:			this.props.label,
				isRequired:		this.props.isRequired,
				items:			this.getLabels(),
				itemsLeftSide: 	this.getColorBoxes()
			}),
			colorBox: (color) => ({
				className:	'colorBox',
				style:		this.cs.colorBox(color)
			})
		}
	}

	renderColorBox(color){
		let colorBox = this.cp.colorBox(color);

		return <div {...colorBox}/>
	}

	render(){
		let {} = this.props

		let SelectColorInput 	= this.cp.SelectColorInput()
		let selectInput 		= this.cp.selectInput()

		return <div {...SelectColorInput}>
			<SelectInput {...selectInput}/>
		</div>
	}
}

SelectColorInput.propTypes = propTypes

export default SelectColorInput
