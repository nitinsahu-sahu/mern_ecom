import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../action/AuthSlice'

export const store = configureStore({
    reducer: {
        AuthSlice
    }
})