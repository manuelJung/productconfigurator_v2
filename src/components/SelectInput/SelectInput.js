import React from 'react'
import classes from './SelectInput.scss'
import TextInput from 'components/TextInput'

const propTypes = {
	value: 			React.PropTypes.string.isRequired,
	onChange: 		React.PropTypes.func.isRequired,
	label: 			React.PropTypes.string.isRequired,
	isRequired: 	React.PropTypes.bool,
	items: 			React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
	// for SelectFontInput
	imgSrcs:		React.PropTypes.arrayOf(React.PropTypes.string),
	//for SelectColorInput
	itemsLeftSide:	React.PropTypes.array
}

class SelectInput extends React.Component {
	
	constructor(props){
		super(props)

		this.cp = this._getCProps()
		this.cs = this._getCStyles()

		this.openDropdown 			= this.openDropdown.bind(this)
		this.closeDropdown 			= this.closeDropdown.bind(this)
		this.clearValue 			= this.clearValue.bind(this)
		this.onInputFocus 			= this.onInputFocus.bind(this)
		this.onInputBlur 			= this.onInputBlur.bind(this)
		this.onItemClick 			= this.onItemClick.bind(this)
		this.onMouseEntersDropdown 	= this.onMouseEntersDropdown.bind(this)
		this.onMouseLeavesDropdown 	= this.onMouseLeavesDropdown.bind(this)
		this.onSelection			= this.onSelection.bind(this)

		this.cursorWithinDropdown = false

		this.state = {
			dropdownIsOpen: false
		}
	}

	openDropdown(){
		this.setState({
			dropdownIsOpen: true
		})
	}

	closeDropdown(){
		this.setState({
			dropdownIsOpen: false
		})
	}

	clearValue(){
		this.props.onChange('')
	}

	onInputFocus(){
		this.openDropdown()
	}

	onInputBlur(){
		if(!this.cursorWithinDropdown){
			this.closeDropdown()
		}
	}

	onSelection(val){
		// only trigger change, if newVal is one of the options
		let { items, onChange } = this.props
		if(items.indexOf(val) !== -1 || val === ''){
			onChange(val)
		}
	}

	onItemClick(item){
		this.closeDropdown()
		this.props.onChange(item)
	}

	onMouseEntersDropdown(){
		this.cursorWithinDropdown = true
	}

	onMouseLeavesDropdown(){
		this.cursorWithinDropdown = false
	}

	_getCStyles(){
		return {
			dropdown: (isOpen) => ({
				willChange: "transform, visibility",
				transition: "all 200ms ease-out",
				transformOrigin: "top",
				transform: 	isOpen
								? "scaleY(1)"
								: "scaleY(0)",
				visibility: isOpen
								? "visible"
								: "hidden"
			}),
			clearButton: (isVisible) => ({
				display:	isVisible
								? "block"
								: "none"
			}),
			dropdownButton: (isVisible) => ({
				display:	isVisible
								? "block"
								: "none"
			}),
			dropdownItem: (isSelected) => ({
				background:	isSelected
								? "lightgrey"
								: ""
			})
		}
	}

	_getCProps(){
		return{
			SelectInput: () => ({
				className: 'SelectInput'
			}),
			textInput: () => ({
				value: 			this.props.value,
				onChange: 		this.onSelection,
				label: 			this.props.label,
				isRequired: 	this.props.isRequired,
				onFocus: 		this.onInputFocus,
				onBlur: 		this.onInputBlur
			}),
			dropdown: () => ({
				className: 		'dropdown',
				onMouseEnter: 	this.onMouseEntersDropdown,
				onMouseLeave: 	this.onMouseLeavesDropdown,
				style:			this.cs.dropdown(this.state.dropdownIsOpen)
			}),
			dropdownItem: (item, index) => ({
				key: 		index,
				className: 	'dropdownItem',
				onClick: 	() => this.onItemClick(item),
				style: 		this.cs.dropdownItem(this.props.value === item)
			}),
			clearButton: () => ({
				className:  'clearButton',
				onClick: 	this.clearValue,
				style:		this.cs.clearButton(this.props.value ? true : false)
			}),
			dropdownButton: () => ({
				className: 	this.state.dropdownIsOpen
								? 'activeDropdownButton'
								: 'dropdownButton',
				style:		this.cs.dropdownButton(this.props.value ? false : true)
			}),
			leftSideItem: () => ({
				className: 'leftSideItem'
			})
		}
	}

	renderItemsLeftSide(component){
		let leftSideItem = this.cp.leftSideItem()

		return <div {...leftSideItem}>
			{component}
		</div>
	}

	renderDropdownItem(item, index){
		let isImgItem = !!this.props.imgSrcs
		
		let dropdownItem = this.cp.dropdownItem(item, index)
		
		if(isImgItem){
			return <div {...dropdownItem}>
				<img src={this.props.imgSrcs[index]}/>
			</div>
		}

		return <div {...dropdownItem}>
			{ this.props.itemsLeftSide && this.renderItemsLeftSide(this.props.itemsLeftSide[index])}
			{item}
		</div>
	}

	render(){
		let { items } = this.props

		let SelectInput 	= this.cp.SelectInput()
		let dropdown 		= this.cp.dropdown()
		let textInput 		= this.cp.textInput()
		let clearButton 	= this.cp.clearButton()
		let dropdownButton	= this.cp.dropdownButton()

		return <div {...SelectInput}>
			<TextInput {...textInput}/>
			<div {...clearButton}>X</div>
			<div {...dropdownButton}/>
			<div {...dropdown}>
				{
					items.map( (_,i) => this.renderDropdownItem(_,i))
				}
			</div>
		</div>
	}
}

SelectInput.propTypes = propTypes

export default SelectInput