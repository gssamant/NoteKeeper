import { configureStore } from '@reduxjs/toolkit'
import noteReducer from './redux/slice'

export const store = configureStore({
	reducer: {
		note: noteReducer,
  },
})