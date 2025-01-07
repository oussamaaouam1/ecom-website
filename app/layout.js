import {  Arima, Averia_Sans_Libre, DM_Serif_Text, Kanit, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";


const roboto = Kanit({subsets:["latin"], weight:'600'});
export const metadata = {
  title: "ACTIVE SW",
  description: "POWER YOUR WORKOUT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // className={roboto.className}
      >
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
