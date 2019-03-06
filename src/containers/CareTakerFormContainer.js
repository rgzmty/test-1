import { connect } from 'react-redux'
import { addCareTaker } from '../actions'
import CareTakerForm from '../components/CareTakerForm'

export default connect(
    null,
    dispatch => ({
        onCreate: (country, name, phone, email) => dispatch(addCareTaker(country, name, phone, email))
    })
)(CareTakerForm)
