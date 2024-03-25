"use client";
import Spinner from "@/components/spinner/Spinner";
import CustomButton from "@/components/transaction/CustomButton";
import { MainContext } from "@/context/MainContext";
import { AccountType } from "@/types";
import { customAlphabet } from "nanoid";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const { apiUrl } = useContext(MainContext);

  const nanoId = customAlphabet("0123456789", 16);
  const [status, setStatus] = useState<string>("idle");
  const [signUpInfo, setSignUpInfo] = useState<AccountType>({
    id: "",
    fullname: "",
    password: "",
    cardNumber: nanoId(),
    balance: 100000,
    history: [],
  });

  const router = useRouter();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpInfo({
      ...signUpInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "idle") {
      try {
        setStatus("pending");
        const res = await fetch(`${apiUrl}/accounts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(signUpInfo),
        });
        if (res.status === 201) {
          toast.success("User successfully created!");
          router.refresh();
          router.push("/signIn");
        } else toast.error("This didn't work.");
      } catch (err) {
        toast.error("An error has occurred on the server.");
        setStatus("error");
      } finally {
        setStatus("idle");
      }
    }
  };

  const { fullname, id, password } = signUpInfo;

  return (
    <div className="h-screen flex items-center justify-center ">
      <form
        onSubmit={handleSignUp}
        className="card flex flex-col items-center p-8 rounded-lg shadow-lg"
        style={{
          width: "80%",
          maxWidth: "400px",
          minHeight: "400px",
        }}
      >
        <h6 className="text-sky-500 font-bold">Sign Up</h6>
        <input
          name="fullname"
          value={fullname}
          onChange={(e) => handleChangeInput(e)}
          type="text"
          className="input px-4 rounded-lg"
          placeholder="Fullname"
        />
        <input
          name="id"
          value={id}
          onChange={(e) => handleChangeInput(e)}
          type="number"
          className="input px-4 rounded-lg"
          placeholder="ID Card"
        />
        <input
          name="password"
          value={password}
          onChange={(e) => handleChangeInput(e)}
          type="password"
          className="input px-4 rounded-lg"
          placeholder="Password"
        />
        <CustomButton
          text={status === "pending" ? <Spinner /> : "Sign up"}
          isDisabled={false}
        />
      </form>
    </div>
  );
};

export default SignUpPage;
