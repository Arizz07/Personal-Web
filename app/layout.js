import { Geist, Geist_Mono,DM_Sans,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import UI from "./components/UI";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dm_Sans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});




export const metadata = {
  title: "Azz's Portfolio",
  description: "Showcasing my work and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${dm_Sans.variable} ${poppins.variable} antialiased`}
      >
        <Navbar/>
        <div className="bg-neutral-800 text-white min-h-screen">
        {children}
        <UI/>
        </div>  
      </body>
    </html>
  );
}
