import React from 'react'
import PropTypes from 'prop-types'

const LoadingAlert = ({isLoading}) => isLoading
    ? <p className="alert alert-secondary">Cargando datos...</p>
    : null

LoadingAlert.propTypes = {
    isLoading: PropTypes.bool.isRequired
}

export default LoadingAlert
