"use client";
import { MainContext } from "@/context/MainContext";
import { Suspense, useContext } from "react";
import SkeletonComponent from "../skeleton/Skeleton";

const FakeAccount = () => {
  const { isUser, fakeAccount } = useContext(MainContext);

  return (
    <>
      {isUser && (
        <Suspense fallback={<SkeletonComponent style={"min-h-32"} />}>
          <div className="card flex-col min-h-42 ">
            <p className="text-center">Destination account : {fakeAccount.idCard}</p>
            <p className="text-yellow-500">Balance : ${fakeAccount.balance}</p>
          </div>
        </Suspense>
      )}
    </>
  );
};

export default FakeAccount;
