import { setLoginReducer } from './login/index'
// import { OtherReducer } from './otherReducer'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
  setLoginState: setLoginReducer
//   otherState: otherReducer
})