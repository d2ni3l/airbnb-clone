import "./globals.css";
import type { Metadata } from "next";
import { poppins } from "./fonts";
import { Navbar } from "./components";
import RegisterModel from "./components/modal/RegisterModel";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modal/LoginModel";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modal/RentModal";

export const metadata: Metadata = {
  title: "Air bnb",
  description: "Air bnb Clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Navbar currentUser={currentUser} />
        <ToasterProvider />
        <RegisterModel />
        <LoginModal />
        <RentModal/>
        <div className="pb-20 pt-28">
        {children}
        </div>
      </body>
    </html>
  );
}
