import { combineReducers } from 'redux'
import careTakers from './careTakers.js'
import isLoading from './isLoading.js'

export default combineReducers({
    careTakers,
    isLoading
})
