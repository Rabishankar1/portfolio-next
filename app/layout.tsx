import type { Metadata } from "next";
import { Inter, Open_Sans, Radio_Canada, Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });
const open = Open_Sans({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rabishankar's Portfolio",
  description: "Modern and minimalist JS Portfolio",
  icons: "/R_simple.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100 ">
      <body className={clsx(urbanist.className, "relative min-h-screen")}>
        {children}
        {/* <Footer /> */}
        {/* <div className="absolute inset-0 -z-50 max-h-screen background-gradient"></div>
        <div className="absolute pointer-events-none inset-0 -z-40 h-full bg-[url(/noisetexture.jpg)] opacity-20 mix-blend-soft-light"></div> */}
      </body>
    </html>
  );
}
