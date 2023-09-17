import "./globals.css";
import type { Metadata } from "next";
import { poppins } from "./fonts";
import { Navbar } from "./components";
import RegisterModel from "./components/modal/RegisterModel";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata: Metadata = {
  title: "Air bnb",
  description: "Air bnb Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Navbar />
        <ToasterProvider/>
        <RegisterModel/>
        {children}
      </body>
    </html>
  );
}
