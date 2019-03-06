export const ADD_CARE_TAKER = 'ADD_CARE_TAKER'
export const REMOVE_CARE_TAKER = 'REMOVE_CARE_TAKER'
export const REQUEST_CARE_TAKERS = 'REQUEST_CARE_TAKERS'
export const RECIEVE_CARE_TAKERS = 'RECIEVE_CARE_TAKERS'

export const addCareTaker = (careTaker) => ({type: ADD_CARE_TAKER, careTaker})

export const removeCareTaker = (index) => ({type: REMOVE_CARE_TAKER, index})

export const requestCareTakers = () => ({type: REQUEST_CARE_TAKERS, requestedAt: new Date()})

export const recieveCareTakers = () => ({type: RECIEVE_CARE_TAKERS, recievedAt: new Date()})

export const fetchCareTakers = () => async dispatch => {
    dispatch(requestCareTakers())
    try {
        const response = await fetch('https://sheetsu.com/apis/v1.0su/581ad5595d0d')
        const data = await response.json()
        for (const item of data) {
            dispatch(addCareTaker({
                country: item.pais,
                name: item.name,
                phone: item.phone,
                email: item.email,
            }))
        }
    } catch (e) {
        console.log('Error al cargar datos.', e)
    } finally {
        dispatch(recieveCareTakers())
    }
}
