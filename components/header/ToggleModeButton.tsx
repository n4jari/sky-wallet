"use client";
import { MainContext } from "@/context/MainContext";
import React, { useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ToggleModeButton = () => {
  const { mode, setMode } = useContext(MainContext);

  const className = "text-sky-800 dark:text-sky-200 ";
  return (
    <div>
      {mode === "light" ? (
        <button
          className={className}
          onClick={() =>
            setMode((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          <MdDarkMode size="20" />
        </button>
      ) : (
        <button
          className={className}
          onClick={() =>
            setMode((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          <MdLightMode size="20" />
        </button>
      )}
    </div>
  );
};

export default ToggleModeButton;
