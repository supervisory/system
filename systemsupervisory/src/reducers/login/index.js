import { AUTH_EMAIL, AUTH_PASSWORD } from '../../actions/actionLogin/actionTypes'

const initialState = {
    email: '',
    password: ''
  }

export const setLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_EMAIL:
            return {
                ...state,
                email: action.email
            }
        case AUTH_PASSWORD:
            return {
                ...state,
                password: action.password
            }
      default:
        return state
    }
  }