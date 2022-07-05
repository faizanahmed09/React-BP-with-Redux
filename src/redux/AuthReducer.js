import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
    user: {},
}

export const AuthReducer = createSlice({
    name: 'AuthReducer',
    initialState,
    reducers: {
        isLogin: (state,action) => {
            console.log("Login",action.payload);
            state.isLogin = action.payload;
        },
        setUser: (state,action) => {
            console.log("setUser",action.payload);
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = {};
        },
    },
})

// Action creators are generated for each case reducer function
export const { isLogin, setUser, clearUser } = AuthReducer.actions
export default AuthReducer.reducer
