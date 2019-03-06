import {
    REQUEST_CARE_TAKERS,
    RECIEVE_CARE_TAKERS
} from '../actions'

export default (state = false, action) => {
    switch (action.type) {
        case REQUEST_CARE_TAKERS:
            return true
        case RECIEVE_CARE_TAKERS:
            return false
        default:
            return state
    }
}
