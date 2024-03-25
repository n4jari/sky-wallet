import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { PiCurrencyDollarSimpleDuotone } from "react-icons/pi";
import { TiEqualsOutline } from "react-icons/ti";

const Balance = ({ balance }: { balance: number | string }) => {
  return (
    <div className="flex justify-center items-center gap-4 text-xl font-extrabold ">
      <div className="flex gap-1 items-center ">
        <MdOutlineAccountBalanceWallet />
        <span>BALANCE</span>
      </div>
      <div>
        <TiEqualsOutline />
      </div>
      <div className="flex gap-1 items-center text-yellow-500">
        <PiCurrencyDollarSimpleDuotone />
        <span>{balance}</span>
      </div>
    </div>
  );
};

export default Balance;
