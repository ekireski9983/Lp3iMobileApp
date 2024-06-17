import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './reducer/registerReducer'
import usersReducer from "./reducer/usersReducer"
import authReducer from "./reducer/authReducer"

export default configureStore({
  reducer: {
    register: registerReducer,
    users: usersReducer,
    auth: authReducer
  },
})