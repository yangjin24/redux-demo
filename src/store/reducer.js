import {combineReducers} from 'redux';
import {reducer as headerReducer} from '../routes/header/store'
import {reducer as sideReducer} from '../routes/side/store/'

const rootReducer = combineReducers({
  header: headerReducer,
  side: sideReducer
})

export default rootReducer;