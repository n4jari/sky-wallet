import { Dispatch, SetStateAction } from "react";

export interface IMainContext {
  isUser: boolean;
  setIsUser: Dispatch<SetStateAction<boolean>>;
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
  apiUrl: string;
  account: AccountType;
  setAccount: Dispatch<SetStateAction<AccountType>>;
  accounts: [];
  setAccounts: Dispatch<SetStateAction<[]>>;
  fakeAccount: AccountType;
  setFakeAccount: Dispatch<SetStateAction<AccountType>>;
  accountHistories: HistoryType[];
  setAccountHistories: Dispatch<SetStateAction<HistoryType[]>>;
  clearAccount: () => void;
}

export type HistoryType = {
  amount: number;
  date: string;
  label: string;
};

export type AccountType = {
  idCard?: string;
  cardNumber: string;
  fullname: string;
  balance: number;
  history: HistoryType[];
  id: string;
  password: string;
};

export type SignInInfoType = {
  id: number | string;
  password: string;
};

export interface SignUpInfoType extends SignInInfoType {
  cardNumber: number | string;
  fullname: string;
}

export type CustomButtonPropsType = {
  text: any;
  isDisabled: boolean;
};
