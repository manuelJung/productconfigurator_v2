import React from 'react'
import classes from './InfoText.scss'

const propTypes = {
    text: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.element,
        React.PropTypes.array
    ]).isRequired
}

let InfoText = ({ text }) => (
    <div className='InfoText'>
    	{ text }
    </div>
)

InfoText.propTypes = propTypes

export default InfoText
