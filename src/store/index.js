import { configureStore } from "@reduxjs/toolkit";
import { accountsSlice, getAllAccounts } from './../features/accountsSlice';

export const store = configureStore({
    reducer: {
        accounts: accountsSlice.reducer,
    }
})

store.dispatch(getAllAccounts())
