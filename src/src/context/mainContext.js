import { createContext } from "react";

export const mainContext = createContext({
    mode: "",
    setMode: () => { },
    account: {},
    setAccount: () => { },
    isLogin: false,
    setIsLogin: () => { },
})