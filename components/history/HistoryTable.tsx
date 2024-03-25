"use client";
import { MainContext } from "@/context/MainContext";
import { useContext } from "react";

const HistoryTable = () => {
  const { accountHistories } = useContext(MainContext);

  return (
    <table className="relative w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Transaction Type
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            Date & Time
          </th>
        </tr>
      </thead>

      <tbody>
        {[...accountHistories].reverse().map((item) => (
          <tr
            key={item.date}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <th
              scope="row"
              className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white "
              style={{
                color:
                  item.label === "Deposit"
                    ? "green"
                    : item.label === "Withdraw"
                    ? "red"
                    : "orange",
              }}
            >
              {item.label}
            </th>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              $ {item.amount}
            </th>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.date}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HistoryTable;
