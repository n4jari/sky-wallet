"use client";
import { MainContext } from "@/context/MainContext";
import { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { useDebouncedCallback } from "use-debounce";

const HistorySearch = () => {
  const { account, setAccountHistories } = useContext(MainContext);

  const debouncedSearch = useDebouncedCallback((term: string) => {
    if (term) {
      const filteredHistories = account.history.filter((history) =>
        history.amount.toString().includes(term)
      );
      setAccountHistories(filteredHistories);
    } else setAccountHistories(account.history);
  }, 1000);

  return (
    <div className="flex justify-start items-center gap-2 border border-slate-200 w-64 px-2 py-1 rounded-md my-4 dark:border-slate-600">
      <label>
        <BiSearch />
      </label>
      <input
        placeholder="Price .."
        onChange={(e) => debouncedSearch(e.target.value)}
        className="outline-none bg-transparent w-full"
      />
    </div>
  );
};

export default HistorySearch;
