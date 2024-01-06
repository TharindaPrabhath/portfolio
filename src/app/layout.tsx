import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";

const poppins = Poppins({ weight: ["400", "600", "800"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tharinda Anurajeewa | Developer",
  description: "Personal website of Tharinda Anurajeewa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col bg-neutral-50 ${poppins.className}`}>
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
