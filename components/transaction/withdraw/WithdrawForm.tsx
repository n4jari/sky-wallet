"use client";
import { ChangeEvent, useState, FormEvent, useContext } from "react";
import CustomButton from "../CustomButton";
import { BiDollar } from "react-icons/bi";
import { MainContext } from "@/context/MainContext";
import toast from "react-hot-toast";
import Spinner from "@/components/spinner/Spinner";
const WithdrawForm = () => {
  const { account, setAccount, apiUrl, isUser } = useContext(MainContext);

  const [price, setPrice] = useState<number>(0);
  const [status, setStatus] = useState("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPrice(Number(e.target.value));

  const handleWithdraw = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      ...account,
      balance: account.balance - price,
      history: [
        ...account.history,
        {
          label: "Withdraw",
          date: new Date().toLocaleString(),
          amount: price,
        },
      ],
    };

    if (account.balance >= price) {
      try {
        setStatus("pending");
        const res = await fetch(`${apiUrl}/accounts/${account?.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (res.status === 200) {
          toast.success("The Withdraw was made successfully.");
          const res = await fetch(`${apiUrl}/accounts/${account?.id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          const userData = await res.json();
          if (res.status === 200) setAccount(userData);
        }
      } catch (err) {
        console.error(err);
        setStatus("error");
      } finally {
        setStatus("idle");
        setPrice(0);
      }
    } else {
      toast.error("Your account balance is insufficient.");
    }
  };

  return (
    <form
      onSubmit={handleWithdraw}
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
          placeholder="0.00"
          value={price}
          onChange={(e) => handleChange(e)}
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

export default WithdrawForm;
