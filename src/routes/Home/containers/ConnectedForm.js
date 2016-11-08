import { connect } from 'react-redux'

import Form from '../components/Form'
import { updateField, getFields } from 'modules/form'

var mapStateToProps = (state) => ({
    fields: getFields(state.form)
})

var mapDispatchToProps = (dispatch) => ({
    updateField: (name, value) => dispatch(updateField(name, value)),
    onSubmit: (e) => {
        e.preventDefault()
        console.log(e)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)