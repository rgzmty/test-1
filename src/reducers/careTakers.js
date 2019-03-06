import {
    ADD_CARE_TAKER,
    REMOVE_CARE_TAKER
} from '../actions'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_CARE_TAKER:
            return [
                ...state,
                {
                    country: action.careTaker.country,
                    name: action.careTaker.name,
                    phone: action.careTaker.phone,
                    email: action.careTaker.email
                }
            ]
        case REMOVE_CARE_TAKER:
            return state.filter((_, index) => index !== action.index)
        default:
            return state
    }
}
