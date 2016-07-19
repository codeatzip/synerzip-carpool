/**
 * Created by Jitesh Lalwani on 19/7/16.
 */
import { combineReducers } from 'redux'
import ExampleReducer from './ExampleReducer'

const CombinedReducers  = combineReducers({
    example: ExampleReducer
})

export default CombinedReducers
