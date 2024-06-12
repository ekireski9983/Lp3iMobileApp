import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './reducer/registerReducer'
import usersReducer from "./reducer/usersReducer"

export default configureStore({
  reducer: {
    register: registerReducer,
    users:usersReducer
  },
})