import React from 'react'
import classes from './InputCheckbox.scss'

const propTypes = {
	value: React.PropTypes.oneOf(['', true, false]).isRequired,
	onChange: React.PropTypes.func.isRequired,
	label: React.PropTypes.string.isRequired
}

let InputCheckbox = ({value, label, onChange}) => (
	<div className='InputCheckbox'>
		<label className='label'>
			<input type="checkbox" checked={value} onChange={() => onChange(!value)} />
			{ label }
		</label>
	</div>
)

InputCheckbox.propTypes = propTypes

export default InputCheckbox