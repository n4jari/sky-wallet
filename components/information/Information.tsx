"use client";
import { MainContext } from "@/context/MainContext";
import Link from "next/link";
import React, { Suspense, useContext } from "react";
import Card from "./Card";
import Balance from "./Balance";
import SkeletonComponent from "../skeleton/Skeleton";

const Information = () => {
  const { isUser, account } = useContext(MainContext);
  return (
    <div>
      {isUser ? (
        <div className="max-lg:flex-col flex gap-4 justify-between items-stretch">
          <Suspense fallback={<SkeletonComponent style="min-h-56" />}>
            <div className="card min-h-56">
              <Card account={account} />
            </div>
          </Suspense>
          <Suspense fallback={<SkeletonComponent style="min-h-56" />}>
            <div className="card min-h-56">
              <Balance balance={account.balance} />
            </div>
          </Suspense>
        </div>
      ) : (
        <div className="card min-h-56 max-sm:flex-col">
          <p>First, sign in to your account.</p>
          <Link
            href={"/signUp"}
            className="text-xs text-sky-500 hover:underline"
          >
            Create Account
          </Link>
        </div>
      )}
    </div>
  );
};

export default Information;
