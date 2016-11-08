import React, { Component, PropTypes } from 'react'
require('./Form.scss')
import config from 'utils/config'

import TextInput from 'components/TextInput'
import SelectInput from 'components/SelectInput'
import SelectColorInput from 'components/SelectColorInput'
import SelectFontInput from 'components/SelectFontInput'
import InputCheckbox from 'components/InputCheckbox'
import InfoText from 'components/InfoText'
import TextArea from 'components/TextArea'

export class Form extends Component {

    static PropTypes = {
        fields: PropTypes.shape({
            textfirst: PropTypes.string.isRequired,
            textsecound: PropTypes.string.isRequired,
            position: PropTypes.string.isRequired,
            font: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            fontsize: PropTypes.string.isRequired,
            firm: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            telefon: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            usertext: PropTypes.string.isRequired,
            logocheck: PropTypes.oneOf(['', true, false]).isRequired,
            address: PropTypes.string.isRequired,
            zipcode: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
        }).isRequired,
        updateField: PropTypes.func.isRequired
    }

    render(){
        var { fields, updateField, onSubmit } = this.props

        return <form className="form" onSubmit={onSubmit}>
            
            { /* TEXT DETAILS */ }
            <div className="details-text">
                <TextInput isRequired
                    label="Text Zeile 1 - max. 15 Buchstaben"
                    onChange={ (val) => updateField('textfirst', val) }
                    value={ fields.textfirst }/>
                
                <TextInput
                    label="Text Zeile 2 - max. 15 Buchstaben"
                    onChange={ (val) => updateField('textsecound', val) }
                    value={ fields.textsecound }/>
            </div>

            { /* CUSTOMIZING DETAILS */ }
            <div className="details-customizing">
                <SelectInput isRequired
                    label="Position"
                    items={config.form.positions}
                    onChange={ (val) => updateField('position', val) }
                    value={ fields.position }/>

                <SelectFontInput isRequired
                    label="Schriftart"
                    items={config.form.fonts}
                    onChange={ (val) => updateField('font', val) }
                    value={ fields.font }/>
                
                <SelectColorInput isRequired
                    label="Schriftfarbe"
                    items={config.form.colors}
                    onChange={ (val) => updateField('color', val) }
                    value={ fields.color }/>

                <SelectInput isRequired
                    label="Schrifthöhe"
                    items={config.form.fontSizes}
                    onChange={ (val) => updateField('fontsize', val) }
                    value={ fields.fontsize }/>

                <InputCheckbox
                    label="Logo-Einstickung gewünscht"
                    onChange={ (val) => updateField('logocheck', val) }
                    value={ fields.logocheck }/>
            </div>

            { /* INFOTEXT FIRST DETAILS */ }
            <InfoText text={ config.form.infoTextFirst } />

            { /* USER DETAILS */ }
            <div className="details-user">
                <TextInput isRequired
                    label="Firma"
                    onChange={ (val) => updateField('firm', val) }
                    value={ fields.firm }/>

                <TextInput isRequired
                    label="Vor- und Nachname"
                    onChange={ (val) => updateField('name', val) }
                    value={ fields.name }/>

                <TextInput
                    label="Straße und Hausnummer"
                    onChange={ (val) => updateField('address', val) }
                    value={ fields.address }/>
                
                <div className="row">
                    <div className="col-sm-4">
                        <TextInput
                            label="Postleitzahl"
                            onChange={ (val) => updateField('zipcode', val) }
                            value={ fields.zipcode }/>
                    </div>

                    <div className="col-sm-8">
                        <TextInput
                            label="Ort"
                            onChange={ (val) => updateField('city', val) }
                            value={ fields.city }/>
                    </div>
                </div>

                <TextInput isRequired
                    label="Telefonnummer"
                    onChange={ (val) => updateField('telefon', val) }
                    value={ fields.telefon }/>

                <TextInput isRequired
                    label="E-Mail-Adresse"
                    onChange={ (val) => updateField('email', val) }
                    value={ fields.email }/>
            </div>

            { /* INFOTEXT SECOND DETAILS */ }
            <InfoText text={ config.form.infoTextSecond } />

            <TextArea
                placeholder={ config.form.userTextPlaceholder }
                onChange={ (val) => updateField('usertext', val) }
                value={ fields.usertext }/>
            
            <button type="submit" className='submitButton'>
                Unverbindliche Anfrage absenden
            </button>

        </form>
    }
}

export default Form