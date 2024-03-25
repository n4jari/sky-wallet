"use client";
import { MainContext } from "@/context/MainContext";
import Link from "next/link";
import React, { useContext } from "react";
import { IoLogIn, IoLogOut } from "react-icons/io5";

const btn =
  "flex gap-1 items-center justify-between border border-sky-500 text-sky-500 py-1 px-4 rounded-lg hover:bg-sky-500 hover:text-white min-w-28";

const LoginButton = () => {
  const { isUser, setIsUser, clearAccount } = useContext(MainContext);

  const signOut = () => {
    setIsUser(false);
    clearAccount();
  };

  return (
    <>
      {isUser ? (
        <button className={btn} onClick={signOut}>
          Sign out
          <IoLogOut size={20} />
        </button>
      ) : (
        <Link href="/signIn" className={btn}>
          Sign in <IoLogIn size={20} />
        </Link>
      )}
    </>
  );
};

export default LoginButton;
