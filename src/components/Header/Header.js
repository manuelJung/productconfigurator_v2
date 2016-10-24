import React, { PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'



export const Header = ({ location, dropdownOpen, onDropdownClick }) => (
    <nav id='header' className='top-bar' data-topbar role='navigation'>
        {/* -- Logo Section */}
        <ul className='title-area'>
            <li className='name'>
                <h1>
                    <IndexLink to='/'>
                        React Redux Starter Kit
                    </IndexLink>
                </h1>
            </li>
            <li className='toggle-topbar menu-icon'><a><span/></a></li>
        </ul>
        
        <section className='top-bar-section'>
            {/* -- Right Nav Section */}
            <ul className='right'>
            
                <li className={ location === '/counter' ? 'active' : '' }>
                    <Link to='/counter'>Counter</Link>
                </li>
                
                <li className='has-dropdown'>
                    <a onClick={() => onDropdownClick(!dropdownOpen)}>Dropdown</a>
                    <ul className={'dropdown' + (dropdownOpen ? ' dropdown--active' : '')}>
                        <li className={ location === '/counter' ? 'active' : '' }>
                            <Link to='/counter'>Counter</Link>
                        </li>
                        <li className={ location === '/' ? 'active' : '' }>
                            <Link to='/'>Home</Link>
                        </li>
                    </ul>
                </li>
                
            </ul>

            {/* Left Nav Section */}
            <ul className='left'>
                <li><a>Left Nav Button</a></li>
            </ul>
        </section>
    </nav>
)

Header.propTypes = {
    dropdownOpen: PropTypes.bool,
    location: PropTypes.string,
    onDropdownClick: PropTypes.func
}

export default Header
