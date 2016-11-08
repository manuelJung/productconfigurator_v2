import React from 'react';
import classes from './TextArea.scss'

const propTypes = {
	value: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func.isRequired,
	placeholder: React.PropTypes.string	
}

class TextArea extends React.Component {

	constructor(props){
		super(props)

		this.cp = this._getCProps()
		this.cs = this._getCStyles()
	}

	_getCStyles(){
		return {}
	}

	_getCProps(){
		return {
			TextArea: () => ({
				className: 'TextArea'
			}),
		}
	}

	render(){
		let c_TextArea = this.cp.TextArea()

		let { placeholder, value, onChange } = this.props;

		return <div {...c_TextArea}>
			<textarea placeholder={placeholder} value={value} onChange={onChange}/>
		</div>
	}
}

TextArea.propTypes = propTypes

export default TextArea;