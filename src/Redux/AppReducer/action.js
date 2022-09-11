import * as types from './actionTypes'


const getHotelsRequest = () => {
    return {
        type: types.FETCH_HOTELS_DATA_REQUEST
    }
}
const getHotelsSuccess = (payload) => {
    return {
        type: types.FETCH_HOTELS_DATA_SUCCESS,
        payload,
    }
}
const getHotelsFailure = () => {
    return {
        type: types.FETCH_HOTELS_DATA_FAILURE
    }
}

export {getHotelsRequest,getHotelsSuccess,getHotelsFailure}