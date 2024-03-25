"use client";
import Spinner from "@/components/spinner/Spinner";
import CustomButton from "@/components/transaction/CustomButton";
import { MainContext } from "@/context/MainContext";
import { SignInInfoType } from "@/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import toast from "react-hot-toast";

const SignInPage = () => {
  const { apiUrl, setIsUser, setAccount } = useContext(MainContext);

  const [status, setStatus] = useState("idle");
  const [signInInfo, setSignInInfo] = useState<SignInInfoType>({
    id: "",
    password: "",
  });
  const { id, password } = signInInfo;

  const router = useRouter();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInInfo({
      ...signInInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "idle") {
      try {
        setStatus("pending");
        const res = await fetch(`${apiUrl}/accounts/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (res.status === 200) {
          const data = await res.json();
          if (data.id === id && data.password === password) {
            setAccount(data);
            setIsUser(true);
            toast.success("User successfully logged in.");
            router.push("/");
          } else toast.error("There is no user.");
        } else toast.error("This didn't work.");
      } catch (err) {
        console.error(err);
        toast.error("An error has occurred on the server.");
        setStatus("error");
      } finally {
        setStatus("idle");
      }
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <title>Sign in</title>
      <form
        onSubmit={handleSignIn}
        className="card flex flex-col items-center rounded-lg shadow-lg"
        style={{
          width: "80%",
          maxWidth: "400px",
          minHeight: "400px",
        }}
      >
        <h6 className="text-sky-500 font-bold">Welcome back</h6>
        <input
          onChange={(e) => handleChangeInput(e)}
          value={id}
          name="id"
          type="number"
          className="input px-4 rounded-lg"
          placeholder="ID Card"
        />
        <input
          onChange={(e) => handleChangeInput(e)}
          value={password}
          name="password"
          type="password"
          className="input px-4 rounded-lg"
          placeholder="Password"
        />
        <CustomButton
          text={status === "pending" ? <Spinner /> : "Sign in"}
          isDisabled={false}
        />
      </form>
    </div>
  );
};

export default SignInPage;
