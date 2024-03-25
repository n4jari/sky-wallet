"use client";
import { getAccountApi } from "@/services";
import { IMainContext, AccountType, HistoryType } from "@/types";
import { ReactNode, createContext, useEffect, useState } from "react";

const accountData = {
  cardNumber: "",
  fullname: "",
  balance: 0,
  history: [],
  id: "",
  password: "",
};

const defaultState = {
  isUser: false,
  setIsUser: (isUser: boolean) => {},
  mode: "light",
  setMode: (mode: string) => {},
  apiUrl: "https://sky-wallet.onrender.com",
  account: accountData,
  setAccount: (user: AccountType) => {},
  accounts: [],
  setAccounts: (users: []) => {},
  fakeAccount: {
    idCard: "",
    ...accountData,
  },
  setFakeAccount: (fakeAccount: AccountType) => {},
  accountHistories: [],
  setAccountHistories: (accountHistories: HistoryType[]) => {},
  clearAccount: () => {},
} as IMainContext;

export const MainContext = createContext(defaultState);

const MainProvider = ({ children }: { children: ReactNode }) => {
  const [isUser, setIsUser] = useState<boolean>(false);
  const [mode, setMode] = useState<string>("light");
  const [account, setAccount] = useState<AccountType>(accountData);
  const [accounts, setAccounts] = useState<[]>([]);
  const [fakeAccount, setFakeAccount] = useState<AccountType>({
    idCard: "",
    ...accountData,
  });
  const [accountHistories, setAccountHistories] = useState<HistoryType[]>([]);

  const apiUrl: string = "https://sky-wallet.onrender.com";

  useEffect(() => {
    if (mode === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [mode]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fakeAccountRes = await getAccountApi("1");
        if (fakeAccountRes.status === 200) {
          const data = await fakeAccountRes.json();
          setFakeAccount(data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (isUser) {
      setAccountHistories(account.history);
    }
  }, [account]);

  const clearAccount = () => {
    setAccount({
      cardNumber: "",
      fullname: "",
      balance: 0,
      history: [],
      id: "",
      password: "",
    });
    setAccountHistories([]);
  };

  return (
    <MainContext.Provider
      value={{
        isUser,
        setIsUser,
        fakeAccount,
        setFakeAccount,
        mode,
        setMode,
        account,
        setAccount,
        accounts,
        setAccounts,
        apiUrl,
        accountHistories,
        setAccountHistories,
        clearAccount,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
