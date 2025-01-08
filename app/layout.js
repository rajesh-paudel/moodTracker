import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
const opensans = Open_Sans({
  subsets: ["latin"],
});

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "MoodTracker",
  description: " track your daily mood",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between">
      <Link href="/">
        <h1 className="text-base sm:text-lg textGradient">MoodTracker</h1>
      </Link>

      <div className="flex items-center justify-between">placeholder</div>
    </header>
  );
  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center ">
      <p className={" text-indigo-400  " + fugaz.className}>Created with 💛</p>
    </footer>
  );
  return (
    <html lang="en">
      <body
        className={`  w-full ,max-w-[1000px] mx-auto text-sm:text-base min-h-screen flex flex-col text-slate-700 ${opensans.className} antialiased `}
      >
        <AuthProvider>
          {header}
          {children}
          {footer}
        </AuthProvider>
      </body>
    </html>
  );
}
