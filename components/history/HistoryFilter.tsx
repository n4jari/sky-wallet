"use client";
import { MainContext } from "@/context/MainContext";
import { useContext, useState } from "react";
import { FiFilter } from "react-icons/fi";

const HistoryFilter = () => {
  const { account, setAccountHistories } = useContext(MainContext);
  const [btnIndex, setBtnIndex] = useState<number>(0);

  const handleFilter = (index: number, type: string) => {
    setBtnIndex(index);

    const filteredHistories = account.history.filter((history) =>
      history.label.includes(type)
    );
    if (filteredHistories.length !== 0) setAccountHistories(filteredHistories);
    else setAccountHistories(account.history);
  };

  return (
    <div className="flex  items-center gap-2 ">
      <FiFilter />
      <button
        onClick={() => handleFilter(0, "all")}
        className={`border dark:border-slate-600 px-2 rounded-md text-sm ${
          btnIndex === 0 ? "bg-slate-200 dark:bg-slate-600" : "bg-transparent"
        }`}
      >
        All
      </button>
      <button
        onClick={() => handleFilter(1, "Deposit")}
        className={`border dark:border-slate-600 px-2 rounded-md text-sm ${
          btnIndex === 1 ? "bg-slate-200 dark:bg-slate-600" : "bg-transparent"
        }`}
      >
        Deposit
      </button>
      <button
        onClick={() => handleFilter(2, "Withdraw")}
        className={`border dark:border-slate-600 px-2 rounded-md text-sm ${
          btnIndex === 2 ? "bg-slate-200 dark:bg-slate-600" : "bg-transparent"
        }`}
      >
        Withdraw
      </button>
      <button
        onClick={() => handleFilter(3, "Transfer")}
        className={`border dark:border-slate-600 px-2 rounded-md text-sm ${
          btnIndex === 3 ? "bg-slate-200 dark:bg-slate-600" : "bg-transparent"
        }`}
      >
        Transfer
      </button>
    </div>
  );
};

export default HistoryFilter;
