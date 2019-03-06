import React from 'react'
import PropTypes from 'prop-types'

class CareTakerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            country: props.country,
            name: props.name,
            phone: props.phone,
            email: props.email,

            countryValidation: '',
            nameValidation: '',
            phoneValidation: '',
            emailValidation: '',
        }
    }

    onFormSubmit (event) {
        event.preventDefault()
        this.setState({formWasValidated: true})
        let isValid = true

        if (this.state.country) {
            this.setState({countryValidation: ' is-valid'})
        } else {
            this.setState({countryValidation: ' is-invalid'})
            isValid = false
        }

        if (this.state.name) {
            this.setState({nameValidation: ' is-valid'})
        } else {
            this.setState({nameValidation: ' is-invalid'})
            isValid = false
        }

        const clearPhone = this.state.phone.replace(/[^\d]/g, '')
        this.setState({phone: clearPhone})
        if (clearPhone.length === 13) {
            this.setState({phoneValidation: ' is-valid'})
        } else {
            this.setState({phoneValidation: ' is-invalid'})
            isValid = false
        }

        if (this.state.email.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i)) {
            this.setState({emailValidation: ' is-valid'})
        } else {
            this.setState({emailValidation: ' is-invalid'})
            isValid = false
        }

        if (isValid) {
            console.log('SUCCESS!!!')
            this.props.onCreate({
                country: this.state.country,
                name: this.state.name,
                phone: clearPhone,
                email: this.state.email
            })
            this.reset()
        }
    }

    onResetClick (event) {
        event.preventDefault()
        this.reset()
    }

    reset () {
        this.setState({
            country: this.props.country,
            name: this.props.name,
            phone: this.props.phone,
            email: this.props.email,

            countryValidation: '',
            nameValidation: '',
            phoneValidation: '',
            emailValidation: '',
        })
    }

    render() {
        const updateField = fieldName =>
            event => this.setState({[fieldName]: event.target.value})

        return (
            <form onSubmit={e => this.onFormSubmit(e)}>
                <div className="form-group row">
                    <label htmlFor="country" className="col-sm-2 col-form-label">Pais:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className={'form-control' + this.state.countryValidation}
                            name="country"
                            value={this.state.country}
                            onChange={updateField('country')}
                        />
                        <div className="invalid-feedback">
                            Por favor escriba un pais.
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Nombre:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className={'form-control' + this.state.nameValidation}
                            name="name"
                            value={this.state.name}
                            onChange={updateField('name')}
                        />
                        <div className="invalid-feedback">
                            Por favor escriba un nombre.
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-2 col-form-label">Teléfono:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className={'form-control' + this.state.phoneValidation}
                            name="phone"
                            value={this.state.phone}
                            onChange={updateField('phone')}
                        />
                        <div className="invalid-feedback">
                            Por favor escriba los 13 digitos de su teléfono.
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Correo Electrónico:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className={'form-control' + this.state.emailValidation}
                            name="email"
                            value={this.state.email}
                            onChange={updateField('email')}
                        />
                        <div className="invalid-feedback">
                            Por favor escriba una dirección de correo electrónico válida.
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Agregar</button>
                        <button className="btn btn-secondary" onClick={e => this.onResetClick(e) }>Limpiar</button>
                    </div>
                </div>
            </form>
        )
    }
}

CareTakerForm.propTypes = {
    country: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    onCreate: PropTypes.func.isRequired
}

CareTakerForm.defaultProps = {
    country: 'México',
    name: '',
    phone: '',
    email: ''
}

export default CareTakerForm
