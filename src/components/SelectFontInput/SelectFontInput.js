import React from 'react'
import classes from './SelectFontInput.scss'

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

class SelectFontInput extends React.Component {
	
	constructor(props){
		super(props)

		this.cp = this._getCProps()
		this.cs = this._getCStyles()

		this.getLabels = this.getLabels.bind(this)
		this.getFonts = this.getFonts.bind(this)
	}

	getLabels(){
		return this.props.items.map( item => item.label )
	}

	getFonts(){
		return this.props.items.map( item => item.value )
	}

	_getCStyles(){
		return {}
	}

	_getCProps(){
		return{
			SelectFontInput: () => ({
				className: 'SelectFontInput'
			}),
			selectInput: () => ({
				value: 		this.props.value,
				onChange: 	this.props.onChange,
				label:		this.props.label,
				isRequired:	this.props.isRequired,
				items:		this.getLabels(),
				imgSrcs:	this.getFonts()
			})
		}
	}



	render(){
		let {} = this.props

		let SelectFontInput = this.cp.SelectFontInput()
		let selectInput 	= this.cp.selectInput()

		return <div {...SelectFontInput}>
			<SelectInput {...selectInput}/>
		</div>
	}
}

SelectFontInput.propTypes = propTypes

export default SelectFontInput