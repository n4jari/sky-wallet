import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit'
import { addNewAccountApi, getAllAccountsApi, getSingleAccountApi, updateAccountApi } from './../services/index';
import { toast } from 'react-toastify';
const accountsAdaptor = createEntityAdapter()

export const getAllAccounts = createAsyncThunk("/accounts/getAllAccounts", async () => {
    const resp = await getAllAccountsApi()
    return resp.data
})

export const getSingleAccount = createAsyncThunk("/accounts/getSingleAccount", async (id) => {
    const resp = await getSingleAccountApi(id)
    return resp.data
})

export const addNewAccount = createAsyncThunk("/accounts/addNewAccount", async body => {
    try {
        const resp = await addNewAccountApi(body)
        toast("حساب با موفقیت ساخته شد", { type: "success" })
        return resp.data
    } catch (err) {
        console.log(err);
        toast("مشکلی پیش آمده است.", { type: "error" })
    }

})

export const updateAccount = createAsyncThunk("/accounts/updateAccount", async body => {
    const resp = await updateAccountApi(body.id, body)
    return resp.data
})

const initialState = accountsAdaptor.getInitialState({
    currentAccount: {},
    isLogin: false,
})

export const accountsSlice = createSlice({
    name: "accounts",
    initialState,
    reducers: {
        login: (state, action) => {
            const { password } = action.payload
            const account = state.currentAccount
            if (account && account.password === password) {
                state.isLogin = true
                toast("لاگین", { type: 'success' })
            } else {
                toast("همچین کاربری وجود ندارد", { type: 'error' })
            }
        },
    },
    extraReducers: {
        [getAllAccounts.fulfilled]: accountsAdaptor.setAll,
        [getSingleAccount.fulfilled]: (state, action) => {
            state.currentAccount = action.payload
        },
        [addNewAccount.fulfilled]: accountsAdaptor.addOne,
        [updateAccount.fulfilled]: (state, action) => {
            accountsAdaptor.updateOne
            state.currentAccount = action.payload
        },
    }
})

export const { selectAll, selectById } = accountsAdaptor.getSelectors(state => state.accounts)

export const findTargetAccount = createSelector(
    [selectAll, (_, idCard) => idCard],
    (accounts, idCard) => accounts.find(account => account.idCard === idCard)
)

export const { login } = accountsSlice.actions

export default accountsSlice.reducer

