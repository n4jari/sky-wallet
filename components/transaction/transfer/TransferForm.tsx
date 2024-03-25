"use client";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import CustomButton from "../CustomButton";
import { BiDollar } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";
import { MainContext } from "@/context/MainContext";
import toast from "react-hot-toast";
import { getAllAccountsApi, updateAccountApi } from "@/services";
import Spinner from "@/components/spinner/Spinner";
import { AccountType } from "@/types";

type stateType = {
  price: number;
  cardNumber: number;
};

const TransferForm = () => {
  const {
    account,
    setAccount,
    setAccounts,
    accounts,
    isUser,
    setFakeAccount,
    fakeAccount,
  } = useContext(MainContext);

  const [state, setState] = useState<stateType>({
    price: 0,
    cardNumber: 0,
  });
  const [status, setStatus] = useState("idle");

  const { price, cardNumber } = state;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: Number(e.target.value) });
  };

  const transfer = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (account?.balance >= price) {
      const isTargetAccount: AccountType = await findTargetAccount();
      if (isTargetAccount) {
        const accountBody = {
          ...account,
          balance: account.balance - price,
          history: [
            ...account.history,
            {
              label: "Transfer",
              date: new Date().toLocaleString(),
              amount: price,
            },
          ],
        };

        try {
          setStatus("pending");
          const accountRes = await updateAccountApi(account.id, accountBody);
          if (accountRes.status === 200) {
            await updateTargetAccount(isTargetAccount);
            setAccount(accountBody);
          }
        } catch (err) {
          console.error(err);
          setStatus("error");
        } finally {
          setStatus("idle");
          setState({
            price: 0,
            cardNumber: 0,
          });
        }
      }
    } else {
      toast.error("Your account balance is insufficient.");
    }
  };

  const getAllAccounts = async () => {
    try {
      const res = await getAllAccountsApi();
      if (res && res.status === 200) {
        const accounts = await res.json();
        setAccounts(accounts);
        return accounts;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const findTargetAccount = async () => {
    let accountsList = [];
    if (accounts.length < 1) {
      accountsList = await getAllAccounts();
      setAccounts(accountsList);
    } else accountsList = accounts;
    const existingAccount = accountsList.find(
      (account: AccountType) =>
        Number(account.cardNumber) === cardNumber ||
        Number(account.idCard) === cardNumber
    );
    if (existingAccount) {
      existingAccount;
      return existingAccount;
    } else toast.error("The entered account number is not correct.");
  };

  const updateTargetAccount = async (targetAccount: AccountType) => {
    try {
      const res = await updateAccountApi(targetAccount.id, {
        ...targetAccount,
        balance: targetAccount.balance + price,
      });

      if (res.status === 200) {
        if (cardNumber === Number(fakeAccount.idCard))
          setFakeAccount((prev) => ({
            ...prev,
            balance: prev.balance + price,
          }));
        toast.success("The Transfer was made successfully.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={transfer}
      className="flex items-center justify-center flex-col gap-4"
    >
      <div className="flex justify-center items-center">
        <span className="prefix-input">
          <BiDollar size={24} />
        </span>
        <input
          name="price"
          type="number"
          className="input"
          placeholder="$: 0.00"
          value={price}
          onChange={(e) => handleChange(e)}
        />
        <span className="suffix-input">USD</span>
      </div>
      <div className="flex justify-center items-center">
        <span className="prefix-input">
          <CiCreditCard1 size={24} />
        </span>
        <input
          name="cardNumber"
          type="number"
          className="input"
          placeholder="0000-0000-0000-0000"
          value={cardNumber}
          onChange={(e) => handleChange(e)}
        />
        <span className="suffix-input">###</span>
      </div>
      <CustomButton
        text={status === "pending" ? <Spinner /> : "Confirm"}
        isDisabled={!isUser}
      />
    </form>
  );
};

export default TransferForm;
