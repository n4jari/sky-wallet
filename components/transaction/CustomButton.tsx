import { CustomButtonPropsType } from "@/types";
import React from "react";

const CustomButton = ({ text, isDisabled }: CustomButtonPropsType) => {
  return (
    <button
      type="submit"
      disabled={isDisabled}
      className="flex gap-1 items-center justify-between py-1 px-4 rounded-lg bg-sky-500 text-white hover:bg-sky-700"
      style={{ cursor: isDisabled ? "no-drop" : "pointer" }}
    >
      {text}
    </button>
  );
};

export default CustomButton;
