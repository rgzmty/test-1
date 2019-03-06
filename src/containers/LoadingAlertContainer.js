import { connect } from 'react-redux'
import LoadingAlert from '../components/LoadingAlert.js'

export default connect(
    state => ({
        isLoading: state.isLoading
    })
)(LoadingAlert)
