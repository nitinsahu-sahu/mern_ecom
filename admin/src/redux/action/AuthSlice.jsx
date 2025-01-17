import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { checkAuth, login } from '../Apis/AuthApis'

const initialState = {
    status: "idle",
    errors: null,
    loginStatus: "idle",
    loginError: null,
    loggedInUser: null,
    successMessage: null,
    isAuthChecked: false
}

export const loginAsync = createAsyncThunk('auth/loginAsync', async (cred) => {
    const res = await login(cred)
    return res
})

export const checkAuthAsync=createAsyncThunk('auth/checkAuthAsync',async()=>{
    const res=await checkAuth()
    return res
})

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        clearAuthSuccessMessage: (state) => {
            state.successMessage = null
        },
        clearAuthErrors: (state) => {
            state.errors = null
        },
        resetAuthStatus: (state) => {
            state.status = 'idle'
        },
        resetLoginStatus: (state) => {
            state.loginStatus = 'idle'
        },
        clearLoginError: (state) => {
            state.loginError = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.loginStatus = 'pending'
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.loginStatus = 'fullfilled'
                state.loggedInUser = action.payload
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.loginStatus = 'rejected'
                state.loginError = action.error
            })
    }
})


// exporting selectors
export const selectLoginStatus=(state)=>state.AuthSlice.loginStatus
export const selectLoginError=(state)=>state.AuthSlice.loginError
export const selectAuthStatus = (state) => state.AuthSlice.status
export const selectAuthErrors = (state) => state.AuthSlice.errors
export const selectLoggedInUser = (state) => state.AuthSlice.loggedInUser
export const selectAuthSuccessMessage = (state) => state.AuthSlice.successMessage
export const selectIsAuthChecked = (state) => state.AuthSlice.isAuthChecked

// exporting reducers
export const {
    clearAuthSuccessMessage,
    clearAuthErrors,
    resetAuthStatus,
    clearSignupError,
    clearLoginError,
    resetLoginStatus } = authSlice.actions

export default authSlice.reducer

