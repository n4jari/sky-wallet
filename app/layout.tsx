import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MainProvider from "@/context/MainContext";
import {} from "@/types";
import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";

const exo = Exo_2({ subsets: ["latin"], weight: ["300"] });

export const metadata: Metadata = {
  title: {
    default: "SKY WALLET",
    template: "%s | SKY WALLET",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${exo.className} bg-slate-100 dark:bg-slate-900`}>
        <MainProvider>
          <Header />
          <div style={{ minHeight: "100vh" }}>{children}</div>
          <Footer />
        </MainProvider>
        {/* react-hot-toast  */}
        <Toaster position="top-center" reverseOrder={true} />
      </body>
    </html>
  );
}
