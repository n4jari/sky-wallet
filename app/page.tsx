import History from "@/components/history/History";
import Information from "@/components/information/Information";
import Transaction from "@/components/transaction/Transaction";
import FakeAccount from "@/components/transaction/FakeAccount";
import { Suspense } from "react";
import SkeletonComponent from "@/components/skeleton/Skeleton";
const Home = () => {
  return (
    <div className="p-4 flex flex-col justify-center gap-4">
      <Information />
      <Transaction />
      <FakeAccount />
      <Suspense fallback={<SkeletonComponent style={"min-h-60"} />}>
        <History />
      </Suspense>
    </div>
  );
};

export default Home;
