"use client";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { MainContext } from "@/context/MainContext";
import toast from "react-hot-toast";
import CustomButton from "../CustomButton";
import { BiDollar } from "react-icons/bi";
import Spinner from "@/components/spinner/Spinner";

const DepositForm = () => {
  const { account, setAccount, apiUrl, isUser } = useContext(MainContext);

  const [price, setPrice] = useState<number>(0);
  const [status, setStatus] = useState<string>("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPrice(Number(e.target.value));

  const handleDeposit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      ...account,
      balance: account?.balance + price,
      history: [
        ...account.history,
        {
          label: "Deposit",
          date: new Date().toLocaleString(),
          amount: price,
        },
      ],
    };

    try {
      setStatus("pending");
      const res = await fetch(`${apiUrl}/accounts/${account?.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.status === 200) {
        toast.success("The deposit was made successfully.");
        const res = await fetch(`${apiUrl}/accounts/${account?.id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const userData = await res.json();
        if (res.status === 200) setAccount(userData);
      }
    } catch (err) {
      setStatus("error");
      console.error(err);
    } finally {
      setPrice(0);
      setStatus("idle");
    }
  };

  return (
    <form
      onSubmit={handleDeposit}
      className="flex items-center justify-center flex-col gap-4"
    >
      <div className="flex justify-center items-center">
        <span className="prefix-input">
          <BiDollar size={24} />
        </span>
        <input
          value={price}
          onChange={(e) => handleChange(e)}
          name="price"
          type="number"
          className="input"
          placeholder="0.00"
        />
        <span className="suffix-input">USD</span>
      </div>
      <CustomButton
        text={status === "pending" ? <Spinner /> : "Confirm"}
        isDisabled={!isUser}
      />
    </form>
  );
};

export default DepositForm;
