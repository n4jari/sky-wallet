"use client";
import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-50 dark:opacity-20 flex justify-center items-center z-10">
      <dialog
        ref={dialogRef}
        style={{
          width: "80%",
          maxWidth: "400px",
          height: "auto",
          maxHeight: "400px",
        }}
        className="shadow-lg overflow-hidden rounded-lg bg-white dark:bg-slate-800 dark:text-white p-5 relative flex justify-center items-center"
        onClose={onDismiss}
      >
        {children}
        <button
          onClick={onDismiss}
          className="absolute top-2 font-bold right-2 w-10 h-10 bg-transparent after:content-['x'] hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-sky-500"
        />
      </dialog>
    </div>
  );
}
