import LoginButton from "./LoginButton";
import ToggleModeButton from "./ToggleModeButton";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-slate-200 dark:bg-slate-800">
      <div>
        <LoginButton />
      </div>
      <div className="flex items-center font-extrabold gap-2 text-slate-800 dark:text-slate-200">
        <Link href="/">
          <span className="text-sky-500 text-lg">SKY</span>
          <span>WALLET</span>
        </Link>
      </div>
      <div>
        <ToggleModeButton />
      </div>
    </div>
  );
};
