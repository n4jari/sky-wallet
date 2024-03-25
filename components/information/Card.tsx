import { AccountType } from "@/types";

const Card = ({ account }: { account: AccountType }) => {
  return (
    <div className="w-80 h-40 bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600 rounded-lg shadow-lg">
      <div className="flex justify-between m-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="7" y1="15" x2="7.01" y2="15" />
          <line x1="11" y1="15" x2="13" y2="15" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="9.5" cy="9.5" r="5.5" fill="#fff" />
          <circle cx="14.5" cy="14.5" r="5.5" />
        </svg>
      </div>
      <div className="flex justify-center mt-4">
        <h1 className="text-gray-100 font-bold font-os">{account?.cardNumber}</h1>
      </div>
      <div className="flex flex-col justfiy-end mt-4 p-4 text-sky-200  font-quick">
        <p className="font-bold text-xs">12 / 17</p>
        <h4 className="uppercase tracking-wider font-semibold text-xs">
          {account?.fullname}
        </h4>
      </div>
    </div>
  );
};

export default Card;
