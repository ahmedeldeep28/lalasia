import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { deleteApi, postApi, fetchApi, putApi } from '../../hooks/useApi';

export const getCart = createAsyncThunk("cart/getCart", async (_, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    try {
        const getCartData = await JSON.parse(localStorage.getItem("cart")) || []
        return getCartData
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const addToCart = createAsyncThunk("cart/addToCart", async (productData, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;

    try {
        const getAllItem = await JSON.parse(localStorage.getItem("cart")) || [];
        const findCartWithInedx = getAllItem.findIndex(el => el.productId === productData.productId && el.color === productData.color)

        if (findCartWithInedx != -1) {
            getAllItem[findCartWithInedx].quantity += 1;
            localStorage.setItem("cart", JSON.stringify(getAllItem))
            return getAllItem;
        } else {
            productData.id = Date.now()
            getAllItem.push(productData);
            localStorage.setItem("cart", JSON.stringify(getAllItem))
            return productData
        }
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const deleteCart = createAsyncThunk("cart/deleteCart", async (itemId, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    try {
        const getAllItem = await JSON.parse(localStorage.getItem("cart")) || [];
        const filterCart = getAllItem.filter(el => el.id !== itemId)
        localStorage.setItem("cart", JSON.stringify(filterCart))
        return itemId
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const clearCart = createAsyncThunk("cart/clearCart", async (_, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;

    try {
        localStorage.removeItem("cart")
        return []
    } catch (error) {
        return rejectWithValue(error)
    }
});


let initialState = {
    cartItems: [],
    isLoading: true,
    error: null
}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    extraReducers: {
        //get cart action
        [getCart.pending]: (state, action) => {
            state.isLoading = true
        },
        [getCart.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCart.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        //delete Cart action
        [deleteCart.fulfilled]: (state, action) => {
            state.cartItems = state.cartItems.filter(el => el.id !== action.payload);
        },

        //delete Cart action
        [clearCart.fulfilled]: (state, action) => {
            state.cartItems = [];
        },

    }
})



export default cartSlice.reducer