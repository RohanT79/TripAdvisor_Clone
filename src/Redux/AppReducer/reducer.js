import * as types from './actionTypes';

const initialState = {
    hotels: [],
    isLoading: false,
    isError: false
}

const hotelsReducer = (state= initialState, action) => {
    const {type,payload} = action;
    switch (type) {
        case types.FETCH_HOTELS_DATA_REQUEST: {
          return {
            ...state,
            isLoading: true,
            isError: false
          }
        }
        case types.FETCH_HOTELS_DATA_SUCCESS: {
          return {
            ...state,
            hotels: payload,
            isLoading: false,
            isError: false
          }
        }
        case types.FETCH_HOTELS_DATA_FAILURE: {
          return {
            ...state,
            isLoading: false,
            isError: true
          }
        }
        
      default :
      return state;
      }
}

export {hotelsReducer}