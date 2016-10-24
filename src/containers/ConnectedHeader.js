import { connect } from 'react-redux'
import { updateUi, getUiValue } from 'store/ui'

import Header from '../components/Header'

let dropdownOpen = false

const mapStateToProps = (state) => ({
    location: state.location.pathname,
    dropdownOpen: getUiValue(state.ui, 'header-dropdown-open')
})

const mapDispatchToProps = {
    onDropdownClick: (isOpen) => updateUi('header-dropdown-open', isOpen)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)