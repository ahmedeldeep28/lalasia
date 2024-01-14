import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosApi from '../../api/axios-global';

export const loginAcounte = createAsyncThunk("user/loginAcounte", async (userData, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    try {
        const [findUser] = await axiosApi.get(`/users?email=${userData.email}`);
        console.log(findUser);
        console.log(userData);
        if (findUser.length === 0) {
            return rejectWithValue("this not find email")
        } else {
            if (findUser.password === userData.password) {
                localStorage.setItem("secret", findUser.secret);
                return findUser
            } else {
                return rejectWithValue("this password not eq")
            }
        }
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const createAcount = createAsyncThunk("user/createAcount", async (userData, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    try {
        const findUser = await axiosApi.get(`/users?email=${userData.email}`);
        if (findUser.length !== 0) {
            return rejectWithValue("This email already exists")
        } else {
            let res = await axiosApi.post("/users", userData);
            localStorage.setItem("secret", res.secret);
            return res
        }
    } catch (error) {
        rejectWithValue(error.message)
    }
});


export const getUser = createAsyncThunk("user/getUser", async (userData, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    let secret = localStorage.getItem("secret");

    try {
        const [findUser] = await axiosApi.get(`/users?secret=${secret}`);
        if (findUser) {
            return findUser
        } else {
            return rejectWithValue("this not acounte")
        }
    } catch (error) {
        return rejectWithValue(error)
    }
});

const initialState = {
    isUser: false,
    user:{}
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        logout:(state,action) => {
            localStorage.removeItem("secret");
            state.isUser = false
            state.user = {}
        }
    },
    extraReducers: {
        [createAcount.fulfilled]: (state, action) => {
            state.user = action.payload,
            state.isUser = true
        },
        [loginAcounte.fulfilled]: (state, action) => {
            state.user = action.payload,
            state.isUser = true
        },
        [loginAcounte.rejected]: (state, action) => {
            console.log(action.payload)
        },
        [getUser.fulfilled]: (state, action) => {
            state.isUser = true
            state.user = action.payload
        },
        [getUser.rejected]: (state, action) => {
            state.isUser = false
        }
    }
})

export const { logout } = userSlice.actions

export default userSlice.reducer


