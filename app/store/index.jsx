import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './reducer/registerReducer'
export default configureStore({
  reducer: {
    register:registerReducer
  },
})