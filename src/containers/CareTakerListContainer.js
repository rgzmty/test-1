import { connect } from 'react-redux'
import { removeCareTaker } from '../actions'
import CareTakerList from '../components/CareTakerList'

export default connect(
    state => ({
        items: state.careTakers
    }),
    dispatch => ({
        onRemove: index => dispatch(removeCareTaker(index))
    })
)(CareTakerList)
