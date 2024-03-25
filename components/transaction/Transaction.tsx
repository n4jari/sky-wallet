import Deposit from "./deposit/Deposit";
import Withdraw from "./withdraw/Withdraw";
import Transfer from "./transfer/Transfer";

const Transaction = () => {
  return (
    <div className="max-lg:flex-col flex gap-4 justify-between items-stretch">
      <Deposit />
      <Withdraw />
      <Transfer />
    </div>
  );
};

export default Transaction;
